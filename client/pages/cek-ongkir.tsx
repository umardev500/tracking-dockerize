import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Form from './ongkir/components/form';
import ErrModal from './components/errModal';
import Result from './ongkir/components/result';

const CostCheck = (): JSX.Element => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;
  const [isError, setError] = useState<string>('');
  const dispatch = useDispatch();

  // Get province
  useEffect(() => {
    axios({ url: `${API_BASE}/province` })
      .then((res) => {
        const { data } = res;
        const { rajaongkir } = data;
        const { results } = rajaongkir;
        dispatch({ type: 'SET_PROV_DATA', payload: results });
      })
      .catch((err) => {
        console.log(err);
        setError('500 Internal server error');
      });
  }, []);

  return (
    <>
      {isError !== '' ? <ErrModal setError={setError} errMessage={isError} /> : null}
      <Head>
        <title>Cek harga ongkir</title>
      </Head>
      <Header />
      <div className="px-4 lg:px-32 pb-20">
        <Hero title="Cek Ongkir" description="Cek ongkir dari berbagai kurir yang ada di seluruh Indonesia secara gratis" />
        <div className="grid grid-cols-3 mt-10">
          <Form />
          <Result />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostCheck;
