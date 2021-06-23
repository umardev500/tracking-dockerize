import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Contact from './contact';

const Header = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const SELF_BASE = process.env.NEXT_PUBLIC_SELF_BASEURL;
  const router = useRouter();

  const toggleMenu = (): void => setOpen(!isOpen);

  const openModal = (): void => {
    setOpenModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('is lgin');
      setLogin(true);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Cek resi dari berbagai expedisi di Indonsia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-gray-100 bg-opacity-50 border-b">
        <div className="max-w-7xl max-auto px-4 lg:px-32">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-8" src={`/tracking/tailwind.svg`} alt="Workflow" />
                <h5 className="text-black text-opacity-80 font-medium ml-4 text-lg">Tailwind</h5>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/tracking">
                  <a href="/tracking" className="text-gray-600 hover:text-black font-roboto px-2">
                    Home
                  </a>
                </Link>
                <Link href="/tracking/cek-resi">
                  <a href="/tracking/cek-resi" className="text-gray-600 hover:text-black font-roboto px-2">
                    Cek resi
                  </a>
                </Link>
                <Link href="/tracking/cek-ongkir">
                  <a href="/tracking/cek-ongkir" className="text-gray-600 hover:text-black font-roboto px-2">
                    Cek ongkir
                  </a>
                </Link>
                <a href="#contact" onClick={openModal} className="text-gray-600 hover:text-black font-roboto px-2">
                  Contact
                </a>
                {isLogin ? (
                  <Link href="/tracking/auth/logout">
                    <a href="/tracking/auth/logout" onClick={handleLogout} className="text-gray-600 hover:text-black font-roboto px-2">
                      Logout
                    </a>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="lg:hidden">
              {/* Mobile menu button */}
              <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none">
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu show/hide */}
        {isOpen ? (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/tracking">
                <a href="/tracking" className="hover:bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium font-roboto">
                  Home
                </a>
              </Link>
              <Link href="/tracking/cek-resi">
                <a href="/tracking/cek-resi" className="hover:bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium font-roboto">
                  Cek resi
                </a>
              </Link>
              <Link href="/tracking/cek-ongkir">
                <a href="/tracking/cek-ongkir" className="hover:bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium font-roboto">
                  Cek ongkir
                </a>
              </Link>
              <a href="#contact" onClick={openModal} className="hover:bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium font-roboto">
                Contact
              </a>
              {isLogin ? (
                <Link href="/tracking/auth/logout">
                  <a href="#contact" onClick={handleLogout} className="hover:bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium font-roboto">
                    Logout
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </nav>

      {isOpenModal ? <Contact setOpen={setOpenModal} /> : null}
    </>
  );
};

export default Header;
