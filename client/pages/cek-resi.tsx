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
        <title>Cek Resi - Lacak Status Paket Kiriman</title>
      </Head>
      <Header/>
      <div className="px-4 lg:px-32 pb-20">
        <Hero title="Cek Resi" description="Lacak status dan posisi paket pesanan Anda dari berbagai kurir di Indonesia." />
        <Waybill/>
        <div className="col-span-2 mt-28 lh-lg mb-10">
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mau Cek Resi Tetapi Selalu Gagal? Ini Penyebab dan Solusinya</h2>
          <p className="text-gray-600 font-roboto mt-2">Jika Anda ingin mengetahui keberadaan paket, nomor resi sangat dibutuhkan. Untuk melakukan aktivitas cek resi, Anda bisa berkunjung ke website ekspedisi.</p>
          <p className="text-gray-600 font-roboto mt-2">Ketika cek resi pengiriman paket selalu gagal dan informasi yang diinginkan tidak muncul, apa yang sebaiknya dilakukan? Bagi seorang pembeli, resi pengiriman merupakan informasi yang sangat penting. Resi dapat dianggap sebagai bukti bahwa penjual benar-benar telah memproses barang yang dibeli.</p>
          <p className="text-gray-600 font-roboto mt-2">Untuk mengetahui progres pengiriman barang, pembeli dapat melakukan pelacakan di aplikasi atau website jasa pengiriman. Caranya dengan memasukkan nomor resi pengiriman. Namun, perlukah Anda khawatir jika pengecekan resi ternyata tidak berhasil?</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Alasan Nomor Resi Tidak Terlacak</h2>
          <p className="text-gray-600 font-roboto mt-2">Resi adalah tanda terima secara tertulis dan biasanya digunakan untuk surat, paket, atau bahkan uang kiriman. Resi dikeluarkan oleh pihak jasa pengiriman tiap ada surat, paket, atau uang yang dikirimkan. Nomor resi tersebut dapat dilacak, baik oleh pengirim maupun penerima.</p>
          <p className="text-gray-600 font-roboto mt-2">Untuk mengecek keberadaan paket, Anda bisa menggunakan aplikasi atau website jasa pengiriman yang bersangkutan. Namun, Anda juga dapat memanfaatkan fitur di <a href="https://app.bangmimin.com/cek-resi" className="text-blue-500">app.bangmimin.com/cek-resi</a> karena lebih praktis dan ringan.</p>
          <p className="text-gray-600 font-roboto mt-2">Apabila resi tidak terlacak dengan cara-cara tersebut, Anda perlu melaporkan ke pihak jasa pengiriman. Namun, sebelumnya ketahui dulu penyebab nomor resi tidak bisa terlacak berikut ini:</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">1. Gangguan Pada Server</h3>
          <p className="text-gray-600 font-roboto mt-2">Saat akan cek resi JNE, Anda akan terhubung dengan sistem server di JNE yang dapat menjangkau berbagai wilayah di Indonesia. Bukan tidak mungkin server mengalami gangguan karena traffic yang tinggi. Hal ini disebabkan oleh banyaknya orang yang mengakses fitur tersebut dalam waktu bersamaan.</p>
          <p className="text-gray-600 font-roboto mt-2">Tidak hanya lambat, koneksi ke server bisa putus karena kepadatan traffic tersebut. Agar bisa digunakan lagi secara normal, server harus diperbaiki. Dalam kondisi perbaikan, server yang mendukung layanan tracking dan cek resi tentu tidak berfungsi secara optimal</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">2. Sistem Masih Manual</h3>
          <p className="text-gray-600 font-roboto mt-2">Ada jasa pengiriman yang masih menggunakan cara manual untuk menginput nomor resi ke sistem database online. Proses ini membutuhkan waktu sehingga informasi mengenai resi pengiriman tidak langsung tersedia di website atau aplikasi.</p>
          <p className="text-gray-600 font-roboto mt-2">Agar lebih aman, Anda dapat melakukan pengecekan nomor resi setelah 1x24 jam paket dikirim. Dengan demikian, pihak ekspedisi memiliki cukup waktu untuk menyelesaikan proses input. Jadi, jika berbelanja hari ini, cobalah untuk melacak paket satu hari setelah paket tersebut diterima oleh jasa pengiriman.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">3. Nomor Resi Salah</h3>
          <p className="text-gray-600 font-roboto mt-2">Selain karena eror yang terjadi pada sistem, kegagalan untuk mengecek resi juga dapat disebabkan oleh faktor nonteknis atau pengguna fitur tersebut. Salah satu kesalahan yang bisa saja terjadi adalah tidak teliti ketika memasukkan nomor resi pada kolom yang tersedia. Akibatnya, sistem tidak dapat membaca dan menampilkan informasi yang benar.</p>
          <p className="text-gray-600 font-roboto mt-2">Perlu diperhatikan, nomor resi biasanya terdiri atas sejumlah angka dan huruf atau angka saja dalam jumlah yang cukup banyak. Salah memasukkan nomor resi sesuai urutan yang benar bisa menyebabkan cek resi gagal dilakukan. Jumlah angka dan huruf pada resi di tiap jasa pengiriman juga berbeda-beda.</p>
          <p className="text-gray-600 font-roboto mt-2">Selain itu, nomor resi bisa salah karena informasi yang berasal dari pihak pengirim tidak valid. Hal ini bisa terjadi jika pengirim tidak teliti sehingga menukar nomor resi yang seharusnya milik Anda dengan nomor resi milik orang lain. Akibatnya, informasi yang muncul saat cek resi tidak sinkron dengan data Anda.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">4. Nomor Resi Palsu</h3>
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
          <p className="text-gray-600 font-roboto mt-2">Kunjungi situs web <a href="https://bangmimin.com">Bangmimin.com</a> kemudian pilih aplikasi <a href="https://app.bangmimin.com/cek-resi">cek resi</a> untuk melakukan cek resi paket, baik cek resi TIKI, cek resi Anteraja, hingga cek resi Wahana. Fitur yang tersedia memungkinkan Anda melakukan pengecekan resi dari berbagai jasa pengiriman. Artinya, Anda tidak perlu repot membuka website tiap ekspedisi yang digunakan untuk melakukan hal ini.</p>
          <p className="text-gray-600 font-roboto mt-2">Nah, inilah informasi bermanfaat mengenai alasan tidak bisa cek resi dan bagaimana mengatasinya. Dengan demikian, Anda bisa melakukan langkah yang tepat jika ada masalah dalam pengiriman paket melalui jasa ekspedisi.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mengapa Perlu Lacak Paket?</h2>
          <p className="text-gray-600 mt-4 font-roboto">Sebelum melakukan tracking atau lacak barang kiriman, Anda perlu mengetahui alasan penting di baliknya. Mengapa perlu lacak paket atau tracking dan apa keuntungan yang bisa diperoleh?</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mengetahui Progres Pengiriman</h2>
          <p className="text-gray-600 mt-4 font-roboto">Telah sampai di mana paket yang Anda beli atau pesan dari toko online? Apakah paket segera dikirim oleh penjual setelah transaksi pembelian dilunasi atau justru ditunda? Dengan melakukan mengecek kiriman paket, hal ini bisa diketahui.</p>
          <p className="text-gray-600 mt-4 font-roboto">Karena kasus tertentu, paket juga bisa terhenti di suatu tempat. Anda bisa memantau langsung hal tersebut dengan cara melacak keberadaan paket melalui website atau aplikasi. Apabila ada yang tidak wajar, tidak ada salahnya bertanya kepada pihak jasa pengiriman.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mengetahui Estimasi Waktu Pengiriman</h2>
          <p className="text-gray-600 mt-4 font-roboto">Anda membeli sebuah barang tentu dengan harapan agar segera bisa digunakan. Untuk mengetahui estimasi waktu pengiriman, aplikasi pelacak kiriman paket sangat bermanfaat. Pihak jasa pengiriman biasanya memberikan informasi waktu perkiraan paket akan diterima.</p>
          <p className="text-gray-600 mt-4 font-roboto">Informasi ini berguna, khususnya jika barang yang dibeli sangat dibutuhkan. Begitu pula jika barang yang dikirim tersebut tidak tahan lama, Anda tentu ingin proses pengiriman berlangsung dengan lancar dan cepat.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Mengetahui Paket Telah Diterima</h2>
          <p className="text-gray-600 mt-4 font-roboto">Dengan menggunakan sistem pelacakan paket di Bang Mimin, Anda juga bisa mengetahui apakah paket tersebut telah diterima atau belum. Biasanya, setelah tiba di lokasi tujuan, aplikasi akan menampilkan informasi mengenai data penerima. Jika penerima bukan orang yang berhak, Anda bisa melakukan penelusuran.</p>
          <p className="text-gray-600 mt-4 font-roboto">Fungsi ini juga bisa sangat berguna jika Anda membeli barang dan mengirimkan paket tersebut kepada orang lain di alamat yang berbeda. Dengan cara ini, Anda bisa melakukan pemantauan secara cepat, praktis, dan tepercaya.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Cara Cek Kiriman Paket</h2>
          <p className="text-gray-600 mt-4 font-roboto">Untuk melakukan Pengecekan kiriman paket, Anda bisa langsung menuju website jasa pengiriman. Saat ini, Ada berbagai jasa pengiriman yang beroperasi di seluruh wilayah Indonesia. Berikut di antaranya:</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">1. Pos Indonesia</h3>
          <p className="text-gray-600 mt-4 font-roboto">Untuk cek paket Pos Indonesia, langkah pertama adalah membuka website posindonesia.co.id. Cari menu Lacak Kiriman, klik Tracking. Lalu, masukkan nomor resi pengiriman ke kolom yang tersedia dan klik Cari. Selanjutnya, informasi mengenai paket Anda akan ditampilkan. Anda juga bisa lacak paket pos kilat khusus melalui fitur ini.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">2. TIKI</h3>
          <p className="text-gray-600 mt-4 font-roboto">Anda bisa tracking TIKI dengan mengunjungi website tiki.id. Pada beranda, cari fitur untuk cek resi. Pada kolom yang tersedia, masukkan nomor resi pengiriman paket. Kemudian, klik Lacak untuk tracking paket kiriman TIKI. Anda pun bisa langsung melihat informasi mengenai paket kiriman.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">3. JNT</h3>
          <p className="text-gray-600 mt-4 font-roboto">Untuk tracking JNT, kunjungi website jet.co.id. Pada tab Search, klik menu Trace & Track. Selanjutnya, masukkan nomor resi pengiriman pada kolom yang tersedia. Klik Search untuk lacak kiriman paket J&T. Informasi paket Anda pun akan langsung ditampilkan.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">4. JNE</h3>
          <p className="text-gray-600 mt-4 font-roboto">Lakukan tracking JNE dengan menggunakan fitur yang disediakan di website jne.co.id. Pilih opsi Lacak Kiriman yang tampil di beranda. Masukkan nomor resi pengiriman, kemudian klik Tracking. Informasi yang Anda inginkan saat lacak kiriman paket JNE akan segera muncul.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">5. Ninja Xpress</h3>
          <p className="text-gray-600 mt-4 font-roboto">Ninja Xpress merupakan salah satu jasa pengiriman yang bisa digunakan saat ini. Untuk lacak kiriman paket Ninja, Anda dapat mengunjungi website ninjaxpress.co. Pilih tab Tracking untuk menuju halaman baru. Selanjutnya, masukkan nomor resi pengiriman pada kolom dan klik Track Parcel.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">6. Wahana</h3>
          <p className="text-gray-600 mt-4 font-roboto">Cara lacak kiriman paket Wahana juga cukup mudah. Anda hanya perlu mengunjungi website wahana.com, kemudian pilih opsi Lacak Kiriman. Masukkan nomor resi pengiriman, kemudian klik Lacak.</p>
          <h3 className="text-2xl mt-8 font-roboto font-medium mb-4">7. Indah Cargo</h3>
          <p className="text-gray-600 mt-4 font-roboto">Jasa pengiriman Indah Cargo memungkinkan Anda mengirim paket dari satu tempat ke tempat lain. Untuk lacak kiriman paket Indah Cargo, kunjungi website indahonline.com. Selanjutnya, pilih opsi Cek Resi, kemudian masukkan nomor resi yang dimiliki. Ketik kode keamanan yang tertera, kemudian klik Cek.</p>
          <p className="text-gray-600 mt-4 font-roboto">Selain melalui website, melacak kiriman paket juga bisa dilakukan melalui aplikasi khusus yang dimiliki oleh jasa pengiriman terkait. Untuk melakukan ini, Anda harus menginstal aplikasi yang dimaksud satu per satu pada perangkat. Cara ini tentu tidak efektif, terutama jika Anda harus mengecek kiriman dari berbagai jasa pengiriman. </p>
          <p className="text-gray-600 mt-4 font-roboto">Selain melalui website dan aplikasi jasa pengiriman, Anda bisa melacak kiriman di website <a className="text-blue-500" href="https://app.bangmimin.com">app.bangmimin.com</a>. Selain lebih praktis dan efektif karena bisa digunakan untuk mengecek resi dari berbagai jasa pengiriman, aplikasi ini juga lebih ringan.</p>
          <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Cara Melacak Paket di Aplikasi Bang Mimin</h2>
          <p className="text-gray-600 mt-4 font-roboto">Untuk <b>melacak kiriman paket</b> dengan tepat, apa saja hal yang perlu Anda perhatikan? Yuk, simak beberapa tips berikut ini:</p>
          <div className="mt-5">
             <ul className="list-disc ml-4 text-gray-600">
                <li className="mt-2">Buka link app.bangmimin.com, lalu pilih aplikasi cek resi.</li>
                <li className="mt-2">Masukkan nomor resi pada kolom yang tersedia dengan benar. Salah satu angka saja dapat menghasilkan informasi yang salah.</li>
                <li className="mt-2">Tunggu selama beberapa waktu setelah mendapatkan nomor resi dari pengirim paket sebelum melakukan pengecekan. Petugas jasa pengiriman membutuhkan waktu untuk memasukkan informasi nomor resi ke database agar bisa dilihat oleh semua orang.</li>
                <li className="mt-2">Informasi yang tertera pada website bisa saja lebih terlambat daripada proses pengiriman paket. Hal ini bisa jadi karena petugas di titik-titik tertentu butuh waktu untuk menginput semua informasi.</li>
                <li className="mt-2">Jika paket dinyatakan telah tiba di lokasi tujuan, tetapi ternyata belum Anda terima, sebaiknya lakukan pengecekan terlebih dahulu. Telusuri siapa penerima paket, baik melalui website maupun bertanya kepada orang yang berada di rumah.</li>
                <li className="mt-2">Gunakan website khusus untuk mengecek semua resi paket dari berbagai jasa pengiriman untuk menghemat waktu. Cara ini lebih praktis dan efektif.</li>
              </ul>
           </div>
           <p className="text-gray-600 mt-4 font-roboto">Jadi, inilah berbagai cara yang bisa Anda lakukan untuk melacak kiriman paket dengan mudah. Selamat mencoba!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}