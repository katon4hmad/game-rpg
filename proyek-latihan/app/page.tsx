import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/images/kemenpora.png"
              alt="Kemenpora Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          <ul className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-600">
            <li><a href="#" className="hover:text-red-600 transition">Beranda</a></li>
            <li><a href="#" className="hover:text-red-600 transition">Profil</a></li>
            <li><a href="#" className="hover:text-red-600 transition">Kebijakan</a></li>
            <li><a href="#" className="hover:text-red-600 transition">Berita</a></li>
            <li><a href="#" className="hover:text-red-600 transition">Layanan</a></li>
          </ul>

          <div className="relative">
            <input
              type="text"
              placeholder="Cari informasi..."
              className="px-4 py-2 text-sm rounded-full bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition w-44 md:w-60"
            />
          </div>

        </div>
      </header>

      <section className="bg-[url('/images/Bangrund.png')] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="">
            <Image
              src="/images/Orang.png"
              alt="Iman"
              width={600}
              height={600}
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              BERGERAK, BERSATU, BERPRESTASI
            </h1>
            <p className="text-red-100 text-base md:text-lg mb-8 leading-relaxed">
              Mendorong potensi generasi muda dan mencetak prestasi olahraga nasional menuju panggung dunia.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-md">
                Lihat Berita
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                Layanan Publik
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">
          Informasi Terbaru
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">KEPEMUDAAN</span>
            <h3 className="font-bold text-base mt-3 text-gray-900 line-clamp-2">
              Buka Indonesia Youth Camp 2026, Menpora Ajak Pemuda Berinovasi
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Kemenpora terus mendukung gerakan pemuda berprestasi di tingkat nasional...
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">OLAHRAGA</span>
            <h3 className="font-bold text-base mt-3 text-gray-900 line-clamp-2">
              Persiapan Atlet Menuju Kejuaraan Dunia Resmi Dimulai
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Pembinaan jangka panjang jadi kunci sukses performa para atlet...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">PENGUMUMAN</span>
            <h3 className="font-bold text-base mt-3 text-gray-900 line-clamp-2">
              Panduan Pengajuan Rekomendasi Beasiswa Keolahragaan
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Simak syarat dan tatacara pendaftaran beasiswa Kemenpora tahun ini...
            </p>
          </div>
        </div>
      </section>

    </main>
  );
} 