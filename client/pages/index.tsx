import Link from 'next/link';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Lacak Paket Ekspedisi Nusantara</title>
      </Head>
      <Header />
      <div className="px-4 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
          <div className="col-span-2">
            <div className="py-5">
              <div className="pb-4 pt-1">
                <h1 className="text-3xl font-bold text-gray-800 font-roboto">Cek Resi dan Ongkir</h1>
                <p className="mt-1 text-lg text-gray-600 font-roboto">Lihat ongkir dan status paket dari ekspedisi Indonesia</p>
              </div>
            </div>
            <p className="font-roboto">Pilih Aplikasi</p>

            <div className="mt-5">
              <div className="grid grid-cols-2">
                <div className="col-span-2 lg:col-span-1 mb-3 lg:mb-0">
                  <Link href="/cek-resi">
                    <a href="/cek-resi">
                      <div className="border p-4 rounded flex items-center lg:mr-1 hover:shadow cursor-pointer text-green-500">
                        <span className="flex items-center">
                          <i className="fas fa-barcode text-2xl" />
                        </span>
                        <span className="ml-3 font-medium">CEK RESI</span>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Link href="/cek-ongkir">
                    <a href="/cek-ongkir">
                      <div className="border p-4 rounded flex items-center lg:ml-1 hover:shadow cursor-pointer text-green-500">
                        <span className="flex items-center">
                          <i className="fas fa-truck text-2xl" />
                        </span>
                        <span className="ml-3 font-medium">CEK ONGKIR</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-28 lh-lg mb-10">
            <h2 className="text-2xl font-roboto font-medium mb-4">Lacak Kiriman Paket Setelah Berbelanja Online, Mudah dan Cepat</h2>
            <p className="text-gray-600 font-roboto mt-2">Untuk lacak kiriman paket yang telah dibeli, ada beberapa cara praktis yang bisa Anda lakukan. Yuk, cek di sini langkah-langkah yang bisa dilakukan.</p>
            <p className="text-gray-600 mt-4 font-roboto">Setelah berbelanja online, langkah selanjutnya yang perlu dilakukan adalah melacak kiriman paket. Tujuannya untuk mengetahui kapan pengiriman dan estimasi waktu paket akan diterima.</p>
            <p className="text-gray-600 mt-4 font-roboto">Untuk lacak kiriman paket, Anda bisa mengunjungi website jasa pengiriman yang digunakan. Namun, jika ingin mengecek paket dari jasa pengiriman berbeda secara praktis, solusinya adalah menggunakan aplikasi di Bangmimin.com.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;