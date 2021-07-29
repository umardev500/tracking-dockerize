import Link from 'next/link';
import { useState } from 'react';
import Contact from './contact';

const Footer = (): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const openModal = (): void => {
    setOpenModal(true);
  };

  return (
    <>
      <footer className="px-4 lg:px-32 border-t mt-10">
        <div className="pb-8 pt-10">
          <ul className="flex justify-center flex-wrap">
            <li>
              <Link href="/about">
                <a href="/tracking/about" className="text-gray-500 font-roboto px-4 mb-2 inline-flex">
                  About
                </a>
              </Link>
            </li>
            <li>
              <a onClick={openModal} href="/tracking/contact" className="text-gray-500 font-roboto px-4 mb-2 inline-flex">
                Contact
              </a>
            </li>
            <li>
              <Link href="/cek-resi">
                <a href="/tracking/cek-resi" className="text-gray-500 font-roboto px-4 mb-2 inline-flex whitespace-nowrap">
                  Cek Resi
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cek-ongkir">
                <a href="/tracking/cek-ongkir" className="text-gray-500 font-roboto px-4 mb-2 inline-flex whitespace-nowrap">
                  Cek Ongkir
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center mt-5">
            <li>
              <a href="https://facebook.com/temonggo/" className="px-3 text-xl">
                <i className="fab fa-facebook text-gray-400" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/temonggo/" className="px-3 text-xl">
                <i className="fab fa-instagram text-gray-400" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/temonggocom/" className="px-3 text-xl">
                <i className="fab fa-twitter text-gray-400" />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/temonggo/" className="px-3 text-xl">
                <i className="fab fa-pinterest text-gray-400" />
              </a>
            </li>
             <li>
              <a href="#blank" className="px-3 text-xl">
                <i className="fab fa-youtube text-gray-400" />
              </a>
            </li>
          </ul>
          <p className="text-center font-roboto text-gray-500 mt-6">
            <span>&copy;</span> 2020 Temonggo.com. All rights reserved.
          </p>
        </div>
      </footer>
      {isOpenModal ? <Contact setOpen={setOpenModal} /> : null}
    </>
  );
};

export default Footer;