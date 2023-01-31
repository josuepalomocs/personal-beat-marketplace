import Link from "next/link";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="flex flex-col justify-center items-center h-24 text-xs text-neutral-300">
      <p>© BINARY SELECTION | ALL RIGHTS RESERVED</p>
      <Link className="hover:text-white" href="@mailto:admin@bsel.com">
        ADMIN@BINARYSELECTION.COM
      </Link>
      <p></p>
    </footer>
  );
}
