import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import ErrModal from '../components/errModal';

const LoginPage = (): JSX.Element => {
  const BASE_URL = process.env.NEXT_PUBLIC_SELF_BASEURL;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [isError, setError] = useState<string>('');
  const [isLogin, setLogin] = useState<boolean>(false);
  const router = useRouter();

  const handleUser = (e: any) => {
    setUser(e.target.value);
  };

  const handlePass = (e: any) => {
    setPass(e.target.value);
  };

  const handleSubmit = () => {
    var token = localStorage.getItem('token');

    axios({
      url: `${API_BASE_URL}/change-account`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        user,
        pass
      }
    })
      .then((res) => {
        localStorage.removeItem('token');
        router.push('/auth/login');
      })
      .catch((err) => {
        console.log(err);
        setError('Username or password not valid or you are not loged in or your filled is wrong');
      });
  };

  useEffect(() => {
    var token = localStorage.getItem('token');

    if (token) {
      setLogin(true);
    } else {
      router.push('/auth/login');
    }
  }, []);

  return (
    <>
      {isError !== '' ? <ErrModal setError={setError} errMessage={isError} /> : null}
      <Head>
        <title>Change the account</title>
      </Head>
      {isLogin ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 lg:px-8">
          <div className="max-w-sm w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={`${BASE_URL}/tailwind.svg`} alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Change your account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">Enter your credentials here</p>
            </div>
            <div>
              <div>
                <input onChange={handleUser} type="user" className="flex items-center bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-3" placeholder="Username" />
              </div>
              <div>
                <input onChange={handlePass} type="pass" className="flex items-center bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-5" placeholder="Password" />
              </div>
              <div>
                <button onClick={handleSubmit} type="button" className="w-full bg-indigo-500 inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 h-10 text-base lg:text-sm font-medium text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default LoginPage;
