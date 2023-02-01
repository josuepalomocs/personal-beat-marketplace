import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface LicensesProps {}

export default function Licenses({}: LicensesProps) {
  return (
    <>
      <Head>
        <title>BINARY SELECTION</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Header />
        <main className="flex-1 flex justify-center items-center">
          <section className="grid justify-center items-center grid-cols-2 gap-y-12 text-sm text-neutral-300">
            <div className="flex flex-col justify-center items-center px-8 w-[400px] h-[400px] text-center m-auto">
              <p className=" text-lg font-extrabold">
                STARTER <span className="text-white-400">🞴</span>
              </p>
              <p className="mb-6">$20.00</p>
              <ul className="flex flex-col space-y-2 text-center mb-6 text-sm">
                <li className="">MP3 FILE [320KBPS]</li>
                <li className="">INSTANT EMAIL DELIVERY</li>
                <li className="">SELL 2000 MAX UNITS</li>
                <li className="">100,000 AUDIO STREAMS</li>
                <li className="">100,000 VIDEO STREAMS</li>
                <li className="">MUST CREDIT [PROD. BINARY SELECTION]</li>
              </ul>
              <button className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900">
                VIEW FULL LICENSE
              </button>
            </div>
            <div className="flex flex-col justify-center items-center px-8 w-[300px] h-[400px] text-center m-auto">
              <p className=" text-lg font-extrabold">
                PREMIUM <span className="text-blue-400">🞴</span>
              </p>
              <p className="mb-6">$50.00</p>
              <ul className="flex flex-col space-y-2 text-center mb-6 text-sm">
                <li className="">MP3 & WAV FILES [320KBPS]</li>
                <li className="">INSTANT EMAIL DELIVERY</li>
                <li className="">SELL 3000 MAX UNITS</li>
                <li className="">500,000 AUDIO STREAMS</li>
                <li className="">500,000 VIDEO STREAMS</li>
                <li className="">MUST CREDIT [PROD. BINARY SELECTION]</li>
              </ul>
              <button className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900">
                VIEW FULL LICENSE
              </button>
            </div>
            <div className="flex flex-col justify-center items-center px-8 w-[300px] h-[400px] text-center m-auto">
              <p className=" text-lg font-extrabold">
                TRACKOUTS <span className="text-orange-400">🞴</span>
              </p>
              <p className="mb-6">$100.00</p>
              <ul className="flex flex-col space-y-2 text-center mb-6 text-sm">
                <li className="">WAV TRACKOUT FILES [320KBPS]</li>
                <li className="">MP3 + WAV FILE [320KBPS]</li>
                <li className="">INSTANT EMAIL DELIVERY</li>
                <li className="">SELL 5000 MAX UNITS</li>
                <li className="">1,000,000 AUDIO STREAMS</li>
                <li className="">1,000,000 VIDEO STREAMS</li>
                <li className="">MUST CREDIT [PROD. BINARY SELECTION]</li>
              </ul>
              <button className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900">
                VIEW FULL LICENSE
              </button>
            </div>
            <div className="flex flex-col justify-center items-center px-8 w-[300px] h-[400px] text-center m-auto">
              <p className=" text-lg font-extrabold">
                UNLIMITED <span className="text-purple-400">🞴</span>
              </p>
              <p className="mb-6">$150.00</p>
              <ul className="flex flex-col space-y-2 text-center mb-6 text-sm">
                <li className="">WAV TRACKOUT FILES [320KBPS]</li>
                <li className="">MP3 + WAV FILE [320KBPS]</li>
                <li className="">INSTANT EMAIL DELIVERY</li>
                <li className="">SELL UNLIMITED UNITS</li>
                <li className="">UNLIMITED AUDIO STREAMS</li>
                <li className="">UNLIMITED VIDEO STREAMS</li>
                <li className="">MUST CREDIT [PROD. BINARY SELECTION]</li>
              </ul>
              <button className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900">
                VIEW FULL LICENSE
              </button>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center px-8 w-[300px] h-[300px]  text-center m-auto">
              <p className=" text-lg font-extrabold">
                EXCLUSIVE <span className="text-pink-400">🞴</span>
              </p>
              <p className="mb-6">VIA OFFER</p>
              <ul className="flex flex-col space-y-2 text-center mb-6 text-sm">
                <li className="">EVERYTHING FROM UNLIMITED</li>
                <li className="">PRODUCT IS REMOVED FROM STORE DEFINITELY</li>
              </ul>
              <button className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900">
                VIEW FULL LICENSE
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </PageWrapper>
    </>
  );
}
