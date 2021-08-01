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
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mau Cek Resi Tetapi Selalu Gagal? Ini Penyebab dan Solusinya</h2>
          <p className="text-gray-600 font-roboto mt-2">Jika Anda ingin mengetahui keberadaan paket, nomor resi sangat dibutuhkan. Untuk melakukan aktivitas cek resi, Anda bisa berkunjung ke website ekspedisi.</p>
          <p className="text-gray-600 font-roboto mt-2">Ketika cek resi pengiriman paket selalu gagal dan informasi yang diinginkan tidak muncul, apa yang sebaiknya dilakukan? Bagi seorang pembeli, resi pengiriman merupakan informasi yang sangat penting. Resi dapat dianggap sebagai bukti bahwa penjual benar-benar telah memproses barang yang dibeli.</p>
          <p className="text-gray-600 font-roboto mt-2">Untuk mengetahui progres pengiriman barang, pembeli dapat melakukan pelacakan di aplikasi atau website jasa pengiriman. Caranya dengan memasukkan nomor resi pengiriman. Namun, perlukah Anda khawatir jika pengecekan resi ternyata tidak berhasil?</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Alasan Nomor Resi Tidak Terlacak</h2>
          <p className="text-gray-600 font-roboto mt-2">Resi adalah tanda terima secara tertulis dan biasanya digunakan untuk surat, paket, atau bahkan uang kiriman. Resi dikeluarkan oleh pihak jasa pengiriman tiap ada surat, paket, atau uang yang dikirimkan. Nomor resi tersebut dapat dilacak, baik oleh pengirim maupun penerima.</p>
          <p className="text-gray-600 font-roboto mt-2">Untuk mengecek keberadaan paket, Anda bisa menggunakan aplikasi atau website jasa pengiriman yang bersangkutan. Namun, Anda juga dapat memanfaatkan fitur di <a href="https://app.bangmimin.com/cek-resi" className="text-blue-500">app.bangmimin.com/cek-resi</a> karena lebih praktis dan ringan.</p>
          <p className="text-gray-600 font-roboto mt-2">Apabila resi tidak terlacak dengan cara-cara tersebut, Anda perlu melaporkan ke pihak jasa pengiriman. Namun, sebelumnya ketahui dulu penyebab nomor resi tidak bisa terlacak berikut ini:</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Gangguan Pada Server</h2>
          <p className="text-gray-600 font-roboto mt-2">Saat akan cek resi JNE, Anda akan terhubung dengan sistem server di JNE yang dapat menjangkau berbagai wilayah di Indonesia. Bukan tidak mungkin server mengalami gangguan karena traffic yang tinggi. Hal ini disebabkan oleh banyaknya orang yang mengakses fitur tersebut dalam waktu bersamaan.</p>
          <p className="text-gray-600 font-roboto mt-2">Tidak hanya lambat, koneksi ke server bisa putus karena kepadatan traffic tersebut. Agar bisa digunakan lagi secara normal, server harus diperbaiki. Dalam kondisi perbaikan, server yang mendukung layanan tracking dan cek resi tentu tidak berfungsi secara optimal</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Sistem Masih Manual</h2>
          <p className="text-gray-600 font-roboto mt-2">Ada jasa pengiriman yang masih menggunakan cara manual untuk menginput nomor resi ke sistem database online. Proses ini membutuhkan waktu sehingga informasi mengenai resi pengiriman tidak langsung tersedia di website atau aplikasi.</p>
          <p className="text-gray-600 font-roboto mt-2">Agar lebih aman, Anda dapat melakukan pengecekan nomor resi setelah 1x24 jam paket dikirim. Dengan demikian, pihak ekspedisi memiliki cukup waktu untuk menyelesaikan proses input. Jadi, jika berbelanja hari ini, cobalah untuk melacak paket satu hari setelah paket tersebut diterima oleh jasa pengiriman.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Nomor Resi Salah</h2>
          <p className="text-gray-600 font-roboto mt-2">Selain karena eror yang terjadi pada sistem, kegagalan untuk mengecek resi juga dapat disebabkan oleh faktor nonteknis atau pengguna fitur tersebut. Salah satu kesalahan yang bisa saja terjadi adalah tidak teliti ketika memasukkan nomor resi pada kolom yang tersedia. Akibatnya, sistem tidak dapat membaca dan menampilkan informasi yang benar.</p>
          <p className="text-gray-600 font-roboto mt-2">Perlu diperhatikan, nomor resi biasanya terdiri atas sejumlah angka dan huruf atau angka saja dalam jumlah yang cukup banyak. Salah memasukkan nomor resi sesuai urutan yang benar bisa menyebabkan cek resi gagal dilakukan. Jumlah angka dan huruf pada resi di tiap jasa pengiriman juga berbeda-beda.</p>
          <p className="text-gray-600 font-roboto mt-2">Selain itu, nomor resi bisa salah karena informasi yang berasal dari pihak pengirim tidak valid. Hal ini bisa terjadi jika pengirim tidak teliti sehingga menukar nomor resi yang seharusnya milik Anda dengan nomor resi milik orang lain. Akibatnya, informasi yang muncul saat cek resi tidak sinkron dengan data Anda.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Nomor Resi Palsu</h2>
          <p className="text-gray-600 font-roboto mt-2">Penyebab lainnya yang harus diwaspadai adalah nomor resi yang diberikan pengirim atau penjual memang palsu. Jika benar dikeluarkan oleh pihak ekspedisi, nomor resi tersebut akan memuat informasi yang benar. Namun, jika tidak bisa dicek melalui aplikasi atau website ekspedisi yang bersangkutan, nomor tersebut mungkin saja palsu.</p>
          <p className="text-gray-600 font-roboto mt-2">Penjual atau toko online yang melakukan aksi penipuan seperti ini biasanya hanya oknum tertentu. Namun, tak ada salahnya untuk berhati-hati apabila menyadari transaksi yang mencurigakan saat berbelanja online. Lakukan pengecekan terlebih dahulu sebelum membeli sebuah barang atau produk.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Solusi Saat Cek Resi Gagal Dilakukan</h2>
          <p className="text-gray-600 font-roboto mt-2">Tak perlu panik dulu jika cek resi selalu gagal. Beberapa tips berikut dapat membantu Anda mengambil langkah yang tepat.</p>
          <div className="mt-5">
            <ul className="list-disc ml-4 text-gray-600">
              <li className="mt-2 pl-2">Lakukan cek resi Pos Indonesia di website Pos Indonesia sehari setelah paket diterima oleh jasa ekspedisi. Hal ini untuk memberi waktu bagi petugas memasukkan informasi pengiriman di sistem database online.</li>
              <li className="mt-2 pl-2">Mintalah pihak pengirim untuk mengirimkan foto berisi resi bukti pengiriman yang dikeluarkan oleh pihak ekspedisi, seperti SiCepat, TIKI, JNT, dan layanan lain. Jika tidak memungkinkan, pastikan kembali pengirim telah mengirimkan nomor resi yang benar.</li>
              <li className="mt-2 pl-2">Masukkan nomor resi ke fitur pengecekan dengan teliti. Salah memasukkan nomor resi akan membuat Anda tidak bisa mendapatkan informasi yang benar.</li>
              <li className="mt-2 pl-2">Sebisa mungkin bertanya terlebih dahulu kepada <i>customer service</i> pihak jasa pengiriman jika ada informasi gangguan pada server. Kemudian, tunggu hingga gangguan tersebut diperbaiki untuk mengecek kembali resi pengiriman.</li>
              <li className="mt-2 pl-2">Jika nomor resi tidak bisa dilacak setelah jangka waktu tertentu, segera laporkan hal ini kepada pihak yang terkait, yaitu pengirim maupun jasa ekspedisi. Hal ini bisa terjadi karena kesalahan yang disengaja maupun tidak disengaja.</li>
            </ul>
          </div>
          <p className="text-gray-600 font-roboto mt-8">Cek resi hanya bisa dilakukan secara online melalui aplikasi atau fitur website. Anda pun bisa melakukannya secara mandiri dan gratis. Dengan mengecek resi secara berkala, Anda mengetahui keberadaan paket yang dikirimkan. Karena itu, jika melihat hal yang tidak beres, Anda bisa segera melapor.</p>
          <p className="text-gray-600 font-roboto mt-2">Kunjungi temonggo.com untuk melakukan cek resi paket, baik cek resi TIKI, cek resi Anteraja, hingga cek resi Wahana. Fitur yang tersedia memungkinkan Anda melakukan pengecekan resi dari berbagai jasa pengiriman. Artinya, Anda tidak perlu repot membuka website tiap ekspedisi yang digunakan untuk melakukan hal ini.</p>
          <p className="text-gray-600 font-roboto mt-2">Nah, inilah informasi bermanfaat mengenai alasan tidak bisa cek resi dan bagaimana mengatasinya. Dengan demikian, Anda bisa melakukan langkah yang tepat jika ada masalah dalam pengiriman paket melalui jasa ekspedisi.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
