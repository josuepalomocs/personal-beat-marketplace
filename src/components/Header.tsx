import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="sticky top-0 flex justify-center items-center space-x-8 h-24 text-neutral-300 text-xs bg-black">
      <Link className="hover:text-white" href="/about">
        ABOUT
      </Link>
      <Link className="hover:text-white" href="/artwork">
        ARTWORK
      </Link>
      <Link className="hover:text-white" href="/license">
        LICENSE
      </Link>
      <Link className="hover:text-white" href="/contact">
        CONTACT
      </Link>
    </header>
  );
}
