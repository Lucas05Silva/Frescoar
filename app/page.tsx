import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LinkList } from "@/components/LinkList";
import { Panel } from "@/components/Panel";

export default function Home() {
  return (
    <Panel>
      <Hero />
      <main className="flex flex-col">
        <LinkList />
        <ContactInfo />
      </main>
      <Footer />
    </Panel>
  );
}
