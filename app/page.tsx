import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LinkList } from "@/components/LinkList";

export default function Home() {
  return (
    <>
      <div aria-hidden className="blob blob-cyan" />
      <div aria-hidden className="blob blob-green" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <Hero />
        <main className="mx-auto -mt-4 flex w-full max-w-[440px] flex-1 flex-col px-5">
          <LinkList />
          <Footer />
        </main>
      </div>
    </>
  );
}
