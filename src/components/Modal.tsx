import { ReactNode } from "react";
// @ts-ignore
import { X } from "feather-icons-react";

interface ModalProps {
  width?: number;
  height?: number;
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export default function Modal({
  width,
  height,
  isOpen,
  handleClose,
  children,
}: ModalProps) {
  const widthStyling = width ? `w-[${width}px]` : "";
  const heightStyling = height ? `h-[${height}px]` : "";

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className={`flex flex-col justify-center items-center ${widthStyling} ${heightStyling} absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]
     z-10 bg-black text-sm text-neutral-300 border border-neutral-600`}
    >
      {children}
      <button
        className="absolute top-2 right-2 group p-2"
        onClick={handleClose}
      >
        <X className="w-[20px] text-neutral-300 group-hover:text-white" />
      </button>
    </div>
  );
}
