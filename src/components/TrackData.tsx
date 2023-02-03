import { formatDate } from "@/utility/dayjs";
import Link from "next/link";
import { useContext, useState } from "react";
import { convertIdToFormattedBitString } from "@/utility/bitstring";
import Modal from "@/components/Modal";
import { CartContext } from "@/context/CartProvider";
import { License } from "@/types";

interface TrackDataProps {
  id: number;
  date: Date | string;
  musicalKey: string;
  bpm: number;
}

export default function TrackData({
  id,
  date,
  musicalKey,
  bpm,
}: TrackDataProps) {
  const { cart, addLicense, removeLicense, findLicense } =
    useContext(CartContext) || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen() {
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleAddLicenseToCart(): void {
    const license: License = {
      trackId: id,
      type: "starter",
      price: 20,
    };
    addLicense(license);
    handleClose();
  }

  function handleRemoveLicenseFromCart(): void {
    removeLicense(id);
  }

  return (
    <div className="text-sm text-neutral-300 mr-12">
      <p className="">{convertIdToFormattedBitString(id)}</p>
      <p className="">{formatDate(date, "MMM DD YYYY").toUpperCase()}</p>
      <p className="">KEY: {musicalKey.toUpperCase()}</p>
      <p className="mb-8">BPM: {bpm.toString().toUpperCase()}</p>
      {findLicense(id) ? (
        <>
          <p className="mb-8">
            IN CART - {findLicense(id)!.type.toUpperCase()}
          </p>
          <Link
            href="/checkout"
            className="block w-min items-center text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 mb-2"
          >
            CHECKOUT
          </Link>
          <button
            className="text-red-400 text-xs hover:text-red-500"
            onClick={handleRemoveLicenseFromCart}
          >
            REMOVE
          </button>
        </>
      ) : (
        <button
          className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900"
          onClick={handleOpen}
        >
          ACQUIRE
        </button>
      )}
      <Modal
        width={600}
        height={400}
        isOpen={isModalOpen}
        handleClose={handleClose}
      >
        <p className="mb-8">SELECT DESIRED LICENSE</p>
        <div className="grid flex-col justify-center items-center grid-cols-2 gap-8">
          <button
            className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 w-48 m-auto"
            onClick={handleAddLicenseToCart}
          >
            <div className="flex flex-col">
              <p>
                STARTER <span className="text-white text-xs">🞴</span>
              </p>
              <p className="text-white">$20.00</p>
            </div>
          </button>
          <button
            className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 w-48 m-auto"
            onClick={handleAddLicenseToCart}
          >
            <div className="flex flex-col">
              <p>
                PREMIUM <span className="text-blue-400 text-xs">🞴</span>
              </p>
              <p className="text-blue-400">$50.00</p>
            </div>
          </button>
          <button
            className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 w-48 m-auto"
            onClick={handleAddLicenseToCart}
          >
            <div className="flex flex-col">
              <p>
                TRACKOUTS <span className="text-orange-400 text-xs">🞴</span>
              </p>
              <p className="text-orange-400">$100.00</p>
            </div>
          </button>
          <button
            className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 w-48 m-auto"
            onClick={handleAddLicenseToCart}
          >
            <div className="flex flex-col">
              <p>
                UNLIMITED <span className="text-purple-400 text-xs">🞴</span>
              </p>
              <p className="text-purple-400">$150.00</p>
            </div>
          </button>
          <button
            className="col-span-2 text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900 w-48 m-auto"
            onClick={handleAddLicenseToCart}
          >
            <div className="flex flex-col">
              <p>
                EXCLUSIVE <span className="text-pink-400 text-xs">🞴</span>
              </p>
              <p className="text-pink-400">VIA OFFER</p>
            </div>
          </button>
        </div>
      </Modal>
    </div>
  );
}
