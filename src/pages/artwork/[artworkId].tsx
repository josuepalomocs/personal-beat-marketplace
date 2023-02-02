import Head from "next/head";
import PageWrapper from "@/components/PageWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Artwork from "@/components/Artwork";
import ArtworkPlayer from "@/components/ArtworkPlayer";
import ArtworkPlayerProvider from "@/context/ArtworkPlayerProvider";
import { Artwork as IArtwork } from "@/types";

interface ArtworkProps extends IArtwork {}

export default function ArtworkPage(props: ArtworkProps) {
  // const { id, audioSrc, imageSrc, date, musicalKey, bpm } = props;
  const artwork = {
    id: 0,
    audioSrc: "/artwork/0/0.wav",
    imageSrc: "/artwork/images/tx.jpg",
    date: new Date(),
    musicalKey: "c#",
    bpm: 155,
    href: "/artwork/0",
  };

  const { id, audioSrc, imageSrc, date, musicalKey, bpm, href } = artwork;

  return (
    <>
      <Head>
        <title>BINARY SELECTION</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArtworkPlayerProvider>
        <PageWrapper>
          <Header />
          <main className="flex flex-1 flex-col justify-center items-center">
            <div>
              <div className="flex justify-between text-sm text-neutral-300 mb-12">
                <Link className="hover:text-white" href="#">
                  ⇜ PREVIOUS
                </Link>
                <Link className="hover:text-white" href="#">
                  NEXT ⇝
                </Link>
              </div>
              <Artwork
                id={id}
                audioSrc={audioSrc}
                imageSrc={imageSrc}
                date={date}
                musicalKey={musicalKey}
                bpm={bpm}
                href={href}
              />
            </div>
          </main>
          <Footer />
        </PageWrapper>
      </ArtworkPlayerProvider>
    </>
  );
}
