import React from "react";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-darkBlue">
        <div className="w-[90%] mx-auto px-6 py-2 flex justify-end">
            <Image width={200} height={69} src="/logo.png" alt="Logo"></Image>
        </div>
      </nav>
      {children}
      <footer className="bg-darkBlue mt-64">
        <div className="w-[90%] mx-auto px-6 flex justify-end py-12">
        <p className=" text-whity">Copyright shitty as text</p>
        </div>
      </footer>
    </>
  );
}
