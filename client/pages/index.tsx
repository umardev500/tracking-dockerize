import Link from 'next/link';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Cek resi dan Cek ongkir Indonesia</title>
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
            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Pos Indonesia</h2>
            <p className="text-gray-600 mt-4 font-roboto">Untuk cek paket Pos Indonesia, langkah pertama adalah membuka website posindonesia.co.id. Cari menu Lacak Kiriman, klik Tracking. Lalu, masukkan nomor resi pengiriman ke kolom yang tersedia dan klik Cari. Selanjutnya, informasi mengenai paket Anda akan ditampilkan. Anda juga bisa lacak paket pos kilat khusus melalui fitur ini.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">TIKI</h2>
            <p className="text-gray-600 mt-4 font-roboto">Anda bisa tracking TIKI dengan mengunjungi website tiki.id. Pada beranda, cari fitur untuk cek resi. Pada kolom yang tersedia, masukkan nomor resi pengiriman paket. Kemudian, klik Lacak untuk tracking paket kiriman TIKI. Anda pun bisa langsung melihat informasi mengenai paket kiriman.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">JNT</h2>
            <p className="text-gray-600 mt-4 font-roboto">Untuk tracking JNT, kunjungi website jet.co.id. Pada tab Search, klik menu Trace & Track. Selanjutnya, masukkan nomor resi pengiriman pada kolom yang tersedia. Klik Search untuk lacak kiriman paket J&T. Informasi paket Anda pun akan langsung ditampilkan.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">JNE</h2>
            <p className="text-gray-600 mt-4 font-roboto">Lakukan tracking JNE dengan menggunakan fitur yang disediakan di website jne.co.id. Pilih opsi Lacak Kiriman yang tampil di beranda. Masukkan nomor resi pengiriman, kemudian klik Tracking. Informasi yang Anda inginkan saat lacak kiriman paket JNE akan segera muncul.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Ninja Xpress</h2>
            <p className="text-gray-600 mt-4 font-roboto">Ninja Xpress merupakan salah satu jasa pengiriman yang bisa digunakan saat ini. Untuk lacak kiriman paket Ninja, Anda dapat mengunjungi website ninjaxpress.co. Pilih tab Tracking untuk menuju halaman baru. Selanjutnya, masukkan nomor resi pengiriman pada kolom dan klik Track Parcel.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Wahana</h2>
            <p className="text-gray-600 mt-4 font-roboto">Cara lacak kiriman paket Wahana juga cukup mudah. Anda hanya perlu mengunjungi website wahana.com, kemudian pilih opsi Lacak Kiriman. Masukkan nomor resi pengiriman, kemudian klik Lacak.</p>

            <h2 className="text-2xl mt-8 font-roboto font-medium mb-4">Indah Cargo</h2>
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
      </div>

      <Footer />
    </>
  );
};

export default HomePage;