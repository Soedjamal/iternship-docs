import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero bg-gradient-to-br from-pink-50 to-purple-300 pt-[200px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-[600px] w-[400px]">
          <div>
            <h1 class="text-5xl font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Dokumentasi Magang Universitas Stikubank
            </h1>
            <p className="py-6 text-zinc-600">
              UNISBANK mengembangkan ekosistem calon pengusaha sukses,
              berkesempatan membangun koneksi jaringan nasional maupun
              internasional. Dengan infrastruktur yang lengkap dan baik serta
              dosen yang berpikiran terbuka untuk menciptakan semangat dan
              kreativitasmu.
            </p>
            <button className="btn btn-wide btn-secondary">
              Lihat Dokumentasi
            </button>
          </div>

          <div className="mt-[200px] md:w-[400px] w-full flex flex-col mb-[50px] relative z-0">
            <h1 class="text-5xl mb-2 h-20 font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Program Studi
            </h1>

            <div className="card lg:card-side bg-base-100 shadow-sm w-full ">
              <figure>
                <img src="" alt="Album" className="w-full h-[250px]" />
              </figure>
              <div className="card-body bg-gradient-to-br from-rose-400 to-purple-600 rounded-b-lg flex flex-col items-center">
                <h2 className="card-title text-2xl">Fakultas</h2>
                <p className="">Ekonomika dan Bisnis</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-sm w-full mt-10">
              <figure>
                <img src="" alt="Album" className="w-full h-[250px]" />
              </figure>
              <div className="card-body bg-gradient-to-br from-rose-400 to-purple-600 rounded-b-lg flex flex-col items-center">
                <h2 className="card-title text-2xl">Fakultas</h2>
                <p>Teknologi Informasi dan Industri</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-sm w-full mt-10">
              <figure>
                <img src="" alt="Album" className="w-full h-[250px]" />
              </figure>
              <div className="card-body bg-gradient-to-br from-rose-400 to-purple-600 rounded-b-lg flex flex-col items-center">
                <h2 className="card-title text-2xl">Fakultas</h2>
                <p>Hukum dan Bahasa</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-sm w-full mt-10">
              <figure>
                <img src="" alt="Album" className="w-full h-[250px]" />
              </figure>
              <div className="card-body bg-gradient-to-br from-rose-400 to-purple-600 rounded-b-lg flex flex-col items-center">
                <h2 className="card-title text-2xl">Fakultas</h2>
                <p>Vokasi</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-gradient-to-br from-pink-50 to-purple-50 items-start py-[50px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-[600px] w-[400px]">
          <div>
            <div className="flex items-center justify-between">
              <h1 class="text-5xl w-fit font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
                Sejarah Unisbank
              </h1>
              <img
                src="images/logos/logo-unisbank-baru-768x768.png"
                alt=""
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="flex flex-col gap-6 text-justify">
              <p className="pt-10 text-zinc-600">
                Universitas Stikubank telah berdiri sejak 28 April 1968. Pada
                awalnya dikenal dengan nama Akademi Keuangan Dan Perbankan
                (AKUBANK). Melihat perkembangan kebutuhan masyarakat dalam
                menempuh Pendidikan Tinggi, Yayasan Pendidikan Dan Penerbit
                Mahasiswa Indonesia (YPPMI) mengembangkan STIE, STMIK, STIH,
                STIBA dan AKPARTA Stikubank yang akhirnya bergabung menjadi
                Universitas Stikubank.
              </p>
              <p className=" text-zinc-600">
                Saat ini Universitas Stikubank memiliki 4 Fakultas dan 14
                Program Studi. Fakultas Teknologi Informasi Dan Industri terdiri
                dari Program Studi S2 Teknologi Informasi, S1 Teknik
                Informatika, S1 Sistem Informasi dan S1 Teknik Industri.
                Fakultas Ekonomika Dan Bisnis terdiri dari S2 Manajemen, S1
                Manajemen, S1 Akuntansi dan Pendidikan Profesi Akuntansi.
                Fakultas Hukum Dan Bahasa terdiri dari S1 Sastra Inggris dan S1
                Ilmu Hukum. Fakultas Vokasi terdiri dari D4 Teknik Rekayasa
                Multimedia Grafis, D3 Manajemen Informatika, D3 Keuangan Dan
                Perbankan, D3 Perhotelan.
              </p>
              <p className=" text-zinc-600">
                Universitas Stikubank memiliki tagline “Digital Youth
                Entrepreneurial University”. Selalu meningkatkan kualitas
                pendidikan, sarana dan prasarana untuk menghasilkan lulusan yang
                cakap dibidangnya dan memiliki jiwa kewirausahaan. Untuk
                mencapai hal tersebut pada kurikulum Program Studi telah
                ditambahkan mata kuliah kewirausahaan hingga level Mengelola
                Usaha.
              </p>
              <p className=" text-zinc-600">
                Pada tahun 2023, Univeritas Stikubank telah memiliki lebih dari
                41.000 alumni yang tersebar di seluruh wilayah Indonesia. Banyak
                alumni Universitas Stikubank yang sukses sebagai birokrat di
                tingkat daerah maupun nasional, pengusaha, pimpinan Perguruan
                Tinggi, Manager di perusahaan nasional dan pekerjaan bidang
                lainnya. Berdasarkan survey alumni yang dilakukan secara
                berkala, lebih dari 80% alumni bekerja sesuai bidangnya.
              </p>
              <p className=" text-zinc-600">
                Universitas Stikubank memiliki 2 kampus yang dikenal dengan
                Kampus Mugas dan Kampus Kendeng, Kampus Mugas berada di Jalan
                Tri Lomba Juang 1 Semarang dan Kampus Kendeng berada di Jalan
                Kendeng V Bendan Ngisor Semarang.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="hero bg-gradient-to-br from-pink-50 to-blue-50 items-start py-[50px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-[600px] w-[400px]">
          <div>
            <h1 class="text-5xl font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Visi & Misi Unisbank
            </h1>
            <div className="flex flex-col">
              <h2 className="mt-8 text-2xl font-bold text-zinc-700">Visi</h2>
              <p className="pt-2 text-zinc-600">
                Visi UNISBANK adalah pada tahun 2035 menjadi perguruan tinggi
                yang bereputasi internasional berbasis teknologi dan berjiwa
                kewirausahaan.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="mt-6 text-2xl font-bold text-zinc-700">Misi</h2>
              <p className="pt-2 text-zinc-600">
                Misi perguruan tinggi tentunya tidak terlepas dari Tri Dharma
                Perguruan Tinggi, rumusan misi UNISBANK sebagai berikut:
              </p>
              <ol className="text-zinc-600 mt-2 ml-4 list-decimal flex flex-col gap-2">
                <li>
                  Mengembangkan organisasi universitas yang transparan dan
                  akuntabel berbasis teknologi informasi dan komunikasi untuk
                  mendukung <em>Good University Governance</em> (GUG).
                </li>
                <li>
                  Menyelenggarakan pendidikan yang berorientasi pada
                  perkembangan dunia usaha dan industri untuk mendukung lulusan
                  yang mempunyai daya saing global dan berjiwa kewirausahaan.
                </li>
                <li>
                  Menciptakan suasana akademik yang ramah dan bersahabat guna
                  menghasilkan lulusan yang berkompeten di bidangnya, berbudi
                  pekerti luhur, mau dan mampu bekerjasama, berjiwa
                  kewirausahaan, rajin dan ulet, inovatif dan mampu bersaing
                  secara lokal, nasional, regional, dan global.
                </li>
                <li>
                  Melaksanakan penelitian yang inovatif yang menghasilkan luaran
                  bereputasi internasional, dan bernilai ekonomi tinggi.
                </li>
                <li>
                  Melaksanakan pengabdian kepada masyarakat yang berkontribusi
                  pada pemecahan masalah-masalah dalam masyarakat.
                </li>
                <li>
                  Menjalin kerjasama secara berkelanjutan dengan lembaga
                  pendidikan, lembaga penelitian, pemerintah, dunia usaha,
                  industri, dan institusi yang lain serta masyarakat di tingkat
                  lokal, nasional, regional, dan global.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
