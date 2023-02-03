import { useEffect, useState } from "react";
import { Cart, License } from "@/types";

const cartInitialState = { licenses: [] };

export default function useCart() {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  useEffect(() => {
    const storedCart = getStoredCartFromLocalStorage();
    if (storedCart) {
      setCart(storedCart);
      return;
    }
    setCart(cartInitialState);
  }, []);

  useEffect(() => {
    setCartInLocalStorage();
  }, [cart]);

  function addLicense(license: License): void {
    const newCart: Cart = { licenses: [...cart.licenses, license] };
    setCart(newCart);
  }

  function removeLicense(trackId: number): void {
    const newLicenses = cart.licenses.filter(({ trackId: trackIdInCart }) => {
      return trackId != trackIdInCart;
    });
    const newCart: Cart = { licenses: newLicenses };
    setCart(newCart);
  }

  function findLicense(trackId: number): License | null {
    return (
      cart.licenses.find(({ trackId: trackIdInCart }) => {
        return trackId === trackIdInCart;
      }) || null
    );
  }

  function getStoredCartFromLocalStorage(): Cart | null {
    const storedCartJSON = window.localStorage.getItem("cart");
    if (storedCartJSON) {
      return JSON.parse(storedCartJSON) as Cart;
    }
    return null;
  }

  function setCartInLocalStorage(): void {
    const { licenses } = cart;
    if (licenses.length) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  return { cart, addLicense, removeLicense, findLicense };
}
