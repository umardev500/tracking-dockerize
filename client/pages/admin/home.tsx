import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Header from '../components/header';
import Footer from '../components/footer';
import Permalink from './components/permalink';
import AdminHeader from './components/header';

const AdminHome = (): JSX.Element => {
  const [isLogin, setLogin] = useState<boolean>(false);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      axios({
        url: `${API_BASE_URL}/cek-login`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data);
          setLogin(true);
        })
        .catch((err) => {
          console.log(err);
          router.push('/auth/login');
        });
    } else {
      router.push('/auth/login');
    }
  }, []);

  if (isLogin) {
    return (
      <>
        <Header />
        <div className="px-4 lg:px-32 min-h-screen">
          <AdminHeader />
          <Permalink />
        </div>
        <Footer />
      </>
    );
  }
  return <p>Checking user...</p>;
};

export default AdminHome;
