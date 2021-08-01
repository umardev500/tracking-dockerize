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
        <div className="col-span-2 mt-28 lh-lg mb-10">
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Cara Cek Ongkir Ragam Ekspedisi, Cepat dan Mudah</h2>
          <p className="text-gray-600 font-roboto mt-2">Nikmati kemudahan mengetahui cek ongkir sebelum melakukan pengiriman paket. Anda bisa mempertimbangkan jenis ekspedisi yang paling menguntungkan.</p>
          <p className="text-gray-600 font-roboto mt-2">Dengan dukungan teknologi, cek ongkir atau ongkos kirim dari satu tempat ke tempat lain kini sangat mudah. Sebelum melakukan pengiriman paket, sangat penting untuk mengecek ongkos kirim terlebih dahulu. Hal ini untuk memudahkan Anda memperkirakan biaya yang harus dibayar.</p>
          <p className="text-gray-600 font-roboto mt-2">Ongkos kirim yang diterapkan oleh tiap jasa pengiriman berbeda-beda. Hal ini bergantung pada kualitas pengiriman, khususnya dari segi kecepatan, jarak pengiriman, maupun layanan lain yang disediakan pihak ekspedisi. Anda dapat memilih jenis pengiriman sesuai kebutuhan maupun dana yang dimiliki.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mengapa Perlu Cek Ongkir?</h2>
          <p className="text-gray-600 font-roboto mt-2">Cek ongkir biasanya dilakukan sebelum mengirim sebuah paket ke alamat penerima. Untuk mengetahui tentang informasi biaya pengiriman tersebut, Anda tidak perlu lagi datang ke gerai ekspedisi. Cukup dengan mengunjungi website ekspedisi atau aplikasi yang tersedia, informasi ongkir bisa dipantau.</p>
          <p className="text-gray-600 font-roboto mt-2">Nah, beberapa alasan berikut perlu Anda ketahui sebelum cek ongkir JNE, cek ongkir TIKI, atau cek ongkir SiCepat. Yuk, disimak!</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Bisa Memilih Ekspedisi Sesuai Kebutuhan</h2>
          <p className="text-gray-600 font-roboto mt-2">Alasan paling utama mengecek ongkir sebelum mengirim paket adalah dapat mempertimbangkan jenis jasa pengiriman yang akan digunakan. Berdasarkan informasi dari website, Anda bisa mengetahui ekspedisi mana yang lebih murah dan cepat tiba di alamat tujuan. Jadi, Anda pun bisa memilih ekspedisi yang paling cocok dengan kebutuhan.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Bisa Mempertimbangkan Biaya Operasional</h2>
          <p className="text-gray-600 font-roboto mt-2">Jika Anda adalah seorang pengusaha, biaya operasional dalam membuat produk perlu dipertimbangkan. Salah satu biaya tersebut adalah ongkir untuk membeli bahan baku produk. Biaya ini dapat memengaruhi keluar masuk dana di sebuah usaha, terutama jika jumlahnya cukup besar. Dengan cek ongkir terlebih dahulu, Anda bisa melakukan penyesuaian terhadap biaya tersebut.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Bisa Mengambil Keputusan Terkait Jual Beli</h2>
          <p className="text-gray-600 font-roboto mt-2">Apakah sebaiknya membeli produk secara online atau langsung di toko terdekat? Hal ini bisa Anda pertimbangkan setelah melihat besarnya biaya pengiriman. Jika biaya pengiriman terlalu mahal, membeli langsung di toko terdekat dapat menjadi pilihan terbaik. </p>
          <p className="text-gray-600 font-roboto mt-2">Akan tetapi, jika dipadukan dengan ragam keuntungan lain, misalnya waktu yang tidak terbuang atau diskon yang tersedia, Anda mungkin akan mengambil keputusan yang berbeda. Karena itu, sangat penting untuk mengecek ongkir terlebih dahulu sebagai variabel pertimbangan yang berpengaruh.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Cek Ongkir Ragam Ekspedisi</h2>
          <p className="text-gray-600 font-roboto mt-2">Nah, apa saja ragam ekspedisi yang dapat melakukan pengiriman paket dari satu kota ke kota lain di Indonesia? Berikut daftarnya beserta cara cek ongkirnya.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">JNE</h2>
          <p className="text-gray-600 font-roboto mt-2">Untuk melakukan cek ongkir JNE, Anda bisa mengunjungi jne.co.id. Cari bagian di beranda yang berisi informasi Tarif Kiriman. Masukkan alamat asal dan alamat tujuan, kemudian klik Cek. Anda pun akan langsung melihat tarif ongkir untuk berbagai jenis layanan di JNE beserta estimasi waktu pengiriman.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">TIKI</h2>
          <p className="text-gray-600 font-roboto mt-2">Untuk cek ongkir TIKI, buka alamat website tiki.id. Kemudian masukkan alamat asal, alamat tujuan, dan berat paket di kolom Cek Ongkir. Klik Cek untuk mendapatkan hasilnya. Biaya yang harus dibayar pun akan langsung terlihat di halaman tersebut.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">SiCepat</h2>
          <p className="text-gray-600 font-roboto mt-2">Cek ongkir SiCepat juga bisa Anda lakukan melalui website dengan alamat sicepat.com. Pada tab menu, pilihlah opsi Cek Ongkir. Kemudian, isilah informasi mengenai asal dan tujuan pengiriman, berat paket, dan ukuran dimensi paket. Selanjutnya, klik Cek Harga. </p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Pos Indonesia</h2>
          <p className="text-gray-600 font-roboto mt-2">Untuk melakukan cek ongkir Pos Indonesia, Anda bisa mengunjungi website posindonesia.co.id. Kemudian, pilih menu Hitung Tarif Pengiriman. Masukkan informasi asal pengiriman, tujuan pengiriman, dan berat paket. Selanjutnya, klik Cek Tarif.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Wahana</h2>
          <p className="text-gray-600 font-roboto mt-2">Kunjungi website Wahana di alamat wahana.com untuk cek ongkir Wahana. Pilih opsi Cek Tarif, masukkan informasi kota asal dan kota tujuan. Kemudian, masukkan informasi berat paket yang akan dikirimkan. Selanjutnya, klik Cek untuk mengetahui hasilnya.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">ID Express</h2>
          <p className="text-gray-600 font-roboto mt-2">Untuk cek ongkir ID Express, Anda bisa langsung mengunjungi website idexpress.com. Pilihlah opsi Shipping Free, kemudian masukkan informasi mengenai kota asal dan kota tujuan serta berat paket. Selanjutnya, klik Calculate Fee untuk mengetahui ongkos pengiriman.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Indah Cargo</h2>
          <p className="text-gray-600 font-roboto mt-2">Untuk cek ongkir Indah Cargo, Anda bisa mengunjungi alamat indahonline.com. Pada bagian beranda, pilih opsi Tarif. Kemudian, masukkan informasi alamat asal dan alamat penerima. Jangan lupa, pilih layanan yang akan digunakan dan tambahkan informasi berat paket. Kemudian, masukkan informasi kode keamanan. Lalu, klik Cek.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Lion Parcel</h2>
          <p className="text-gray-600 font-roboto mt-2">Lion Parcel adalah salah satu jasa pengiriman yang memiliki jangkauan cukup luas. Untuk cek ongkir Lion Parcel, Anda bisa berkunjung ke website lionparcel.com, kemudian pilih opsi Cek Tarif. Pada kolom yang tersedia, masukkan informasi yang dibutuhkan.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Tips Cek Ongkir Mudah dan Cepat</h2>
          <p className="text-gray-600 font-roboto mt-2">Selain melakukan cek ongkir di website ekspedisi, Anda juga bisa memanfaatkan aplikasinya jika tersedia. Namun, jika ingin menggunakan cara yang lebih praktis, Anda dapat memanfaatkan fitur di <a href="https://app.bangmimin.com/cek-ongkir" className="text-blue-500">app.bangmimin.com/cek-ongkir</a>. Fitur ini memberikan informasi akurat dengan akses cepat dan ringan.</p>
          <p className="text-gray-600 font-roboto mt-2">Selain itu, Anda juga perlu memerhatikan beberapa poin berikut ini agar cek ongkir lebih mudah dan hasilnya tepat.</p>
          <div className="mt-8">
            <ol className="list-decimal text-gray-600 ml-4">
              <li className="pl-4 mt-2">Masukkan alamat asal dan alamat tujuan pengiriman dengan lengkap pada kolom yang tersedia. Hal ini akan menjamin keakuratan informasi biaya pengiriman yang harus dibayar.</li>
              <li className="pl-4 mt-2">Tiap jasa pengiriman biasanya menawarkan beberapa pilihan jenis pengiriman. Masing-masing memiliki keunggulan yang menguntungkan penggunanya. Jangan lupa untuk mempertimbangkan berbagai opsi tersebut sesuai kebutuhan.</li>
              <li className="pl-4 mt-2">Isi informasi mengenai berat paket dengan tepat. Biasanya, jasa pengiriman menghitung berat paket kiriman tiap kilogram. Ada pula yang mempertimbangkan ukuran dimensi paket, yaitu tinggi, panjang, dan lebar.</li>
              <li className="pl-4 mt-2">Selain tarif pengiriman, pada bagian ini juga akan tampak waktu yang dibutuhkan untuk mengirim paket. Pastikan Anda tidak bermasalah dengan hal ini saat memilih jenis ekspedisi.</li>
            </ol>
          </div>
          <p className="text-gray-600 font-roboto mt-4">Nah, inilah cara cek ongkir pada berbagai ekspedisi yang beroperasi di Indonesia. Dengan mengetahui keunggulan masing-masing ekspedisi, Anda bisa menentukan pilihan terbaik untuk mengirim paket. </p>
          <p className="text-gray-600 font-roboto mt-2"></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostCheck;
