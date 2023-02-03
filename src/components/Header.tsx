import Link from "next/link";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { cart } = useContext(CartContext) || {};
  const router = useRouter();

  const routeStyling = {
    "/about": router.pathname === "/about" ? "text-white underline" : "",
    "/artwork": router.pathname === "/artwork" ? "text-white underline" : "",
    "/licenses": router.pathname === "/licenses" ? "text-white underline" : "",
    "/contact": router.pathname === "/contact" ? "text-white underline" : "",
    "/cart": router.pathname === "/cart" ? "[&>svg]:text-white" : "",
    "/account": router.pathname === "/contact" ? "[&>svg]:text-white" : "",
  };

  return (
    <header className="sticky top-0 flex justify-center items-center space-x-8 h-24 text-neutral-300 text-xs bg-black [&>*]:p-2">
      <Link
        className={`hover:text-white ${routeStyling["/about"]}`}
        href="/about"
      >
        ABOUT
      </Link>
      <Link
        className={`hover:text-white ${routeStyling["/artwork"]}`}
        href="/artwork"
      >
        ARTWORK
      </Link>
      <Link
        className={`hover:text-white ${routeStyling["/licenses"]}`}
        href="/licenses"
      >
        LICENSES
      </Link>
      <Link
        className={`hover:text-white ${routeStyling["/contact"]}`}
        href="/contact"
      >
        CONTACT
      </Link>
      <div className="flex space-x-8 [&>*]:p-2 ">
        <Link
          className={`relative hover:text-white ${routeStyling["/cart"]}`}
          href="/cart"
        >
          <ShoppingBagIcon className="w-[16px]" />
          <p className="absolute bottom-[1px] right-[0px] text-emerald-400">
            {cart?.licenses.length}
          </p>
        </Link>
        <Link className="hover:text-white" href="/account">
          <UserIcon className="w-[16px]" />
        </Link>
      </div>
    </header>
  );
}
