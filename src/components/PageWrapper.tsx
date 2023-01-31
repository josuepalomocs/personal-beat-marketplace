import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex flex-col px-4 max-w-screen min-h-screen bg-black">
      {children}
    </div>
  );
}
