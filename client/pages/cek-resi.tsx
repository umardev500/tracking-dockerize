import Head from 'next/head';
import Header from './components/header';
import Hero from './components/hero';
import Waybill from './waybill';
import Footer from './components/footer';
import { CourierModel } from '../models/courier';

export type CourierProps = {
  courier: CourierModel[];
};

export default function WaybillCheck(): JSX.Element {
  return (
    <>
      <Head>
        <title>Lacak status dan posisi pesanana anda dari berbagai kurir di Indonesia</title>
      </Head>
      <Header />
      <div className="px-4 lg:px-32 pb-20">
        <Hero title="Cek Resi" description="Lacak status dan posisi pesanana anda dari berbagai kurir di Indonesia" />
        <Waybill />
      </div>
      <Footer />
    </>
  );
}
