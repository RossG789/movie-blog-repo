import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#fdf0d5] py-2 shadow-md shadow-black/5  lg:flex-wrap lg:justify-start lg:py-4">
      <div className=" px-6 mx-auto flex justify-normal items-center sm:flex-row">
        <Link href="/">
          <Image
            className=" rounded-lg hover:border-4 border-amber-400"
            src="/logo.jpg"
            height={150}
            width={150}
            alt="An image that says Muvie"
          />
        </Link>

        <div className="w-60 px-6 mx-auto flex justify-between items-center sm:flex-row">
          <Link
            href="/movies"
            className="text-l text-black no-underline hover:text-slate-700"
          >
            Movie Reviews
          </Link>
          <Link
            href="/blog"
            className="text-l text-black no-underline hover:text-slate-700"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
