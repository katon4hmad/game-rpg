'use client'
import Image from "next/image";
import { use, useState } from "react";
import Link from "next/link";

export default function Berita() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      <div className="flex justify-between gap-10 items-center px-8 md:px-40 lg:px-80 bg-gray-300 py-4">
        <Image
          src="/images/logo-domainesia-2021.svg"
          alt="logo domainesia"
          className="h-10 w-auto"
          width={180}
          height={37}
        />

        <input
          type="text"
          placeholder="Searching..."
          className="bg-gray-400 border border-blue-800 px-4 py-2 rounded-full w-full text-white placeholder-gray-200 outline-none"
        />

        <div className="md:flex hidden text-gray-700">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={'bg-[#4aeee3] text-black md:px-40 px-8 flex justify-center gap-10 py-2 md:flex '}>
        <div className="hover:text-blue-700 cursor-pointer">home</div>
        <div className="hover:text-blue-700 cursor-pointer">
          <Link href="/berita" className="hover:text-blue-700 cursor-pointer">
            berita
          </Link>
        </div>
        <div className="hover:text-blue-700 cursor-pointer">tips</div>
        <div className="hover:text-blue-700 cursor-pointer">ebook</div>
        <div className="hover:text-blue-700 cursor-pointer">video</div>
        <div className="hover:text-blue-700 cursor-pointer">paduan</div>
      </div>

      <div>
        <div className="flex md:flex-row flex-col justify-between gap-8 px-8 md:px-40 py-12 bg-linear-to-b from-[rgb(0,238,255)] to-[#0099ff]">
          <div className="flex flex-col justify-center md:w-1/2 w-full">
            <h1 className="text-white text-3xl font-bold">
              SELAMAT DATANG DI DOMAINESIA
            </h1>
            <p className="text-white mt-2">lorem ipsum dolor sit amet </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <Image
              src="/images/blog.png"
              alt="hero domainesia"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="px-8 md:px-40 py-8 bg-[#0099ff] flex justify-between items-center gap-10">
        <div>
          <h2 className="text-md text-gray-200 font-semibold">ARTIKEL</h2>
          <h1 className="text-white text-2xl font-bold">BERITA PILIHAN</h1>
        </div>
        <button className="py-2 px-6 bg-sky-700 hover:bg-sky-800 text-white rounded-full transition-all shadow-md hover:shadow-lg">
          Lainnya
        </button>
      </div>

      <div className="px-8 md:px-40 py-10 bg-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-2"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
          <Image
            src="/images/berita.png"
            alt="berita-1"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 text-black">
            <span className="text-sm font-medium text-sky-600">Berita</span>
            <h3 className="font-bold text-base mt-1 mb-3 leading-snug">
              Supabase: Solusi Open-Source untuk Backend Aplikasi Modern
            </h3>
            <div className="text-xs text-gray-500">
              <div>Oleh John Doe</div>
              <div>10 Maret 2023</div>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div className="px-8 md:px-40 py-8 bg-[#0099ff] flex justify-between items-center gap-10">
          <div>
            <h2 className="text-md text-gray-200 font-semibold">ARTIKEL</h2>
            <h1 className="text-white text-2xl font-bold">BERITA PILIHAN</h1>
          </div>
          <button className="py-2 px-6 bg-sky-700 hover:bg-sky-800 text-white rounded-full transition-all shadow-md hover:shadow-lg">
            Lainnya
          </button>
        </div>
      </div>
    </main>
  );
}
