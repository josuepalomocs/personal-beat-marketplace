import { createContext, ReactNode } from "react";
import { Cart as ICart, License } from "@/types";
import useCart from "@/hooks/useCart";

interface CartProviderProps {
  children: ReactNode;
}

const cartContextDefaultValue = {
  cart: { licenses: [] },
  addLicense: (license: License) => {},
  removeLicense: (trackId: number) => {},
  findLicense: (trackId: number) => null,
};

export const CartContext = createContext<{
  cart: ICart;
  addLicense: (license: License) => void;
  removeLicense: (licenseId: number) => void;
  findLicense: (trackId: number) => License | null;
}>(cartContextDefaultValue);

export default function CartProvider({ children }: CartProviderProps) {
  const { cart, addLicense, removeLicense, findLicense } = useCart();

  return (
    <CartContext.Provider
      value={{ cart, addLicense, removeLicense, findLicense }}
    >
      {children}
    </CartContext.Provider>
  );
}
