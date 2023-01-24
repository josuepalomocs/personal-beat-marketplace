import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 text-white">
      {children}
    </div>
  );
}
