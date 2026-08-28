import Link from "next/link";

const Header = () => {
  return (
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
  );
};

export default Header;