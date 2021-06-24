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
        <div className="col-span-2 mt-28 lh-lg mb-10">
          <h2 className="text-2xl font-roboto font-medium mb-4">Section name</h2>
          <p className="text-gray-600 font-roboto mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias delectus neque repudiandae dolorem dolores. Officiis facilis rem ipsam qui excepturi commodi non, ab, ducimus quia alias nam nihil illum.</p>
          <p className="text-gray-600 mt-4 font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias delectus neque repudiandae dolorem dolores. Officiis facilis rem ipsam qui excepturi commodi non, ab, ducimus quia alias nam nihil illum.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
