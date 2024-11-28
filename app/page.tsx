// import Header from "@/components/header";
import Creators from "@/components/creators";
import FAQs from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import How from "@/components/how";
import Trailers from "@/components/trailers";
import Waitlist from "@/components/waitlist";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins">
        <Hero />
        <How />
        <Creators />
        <Waitlist />
        <FAQs />
        <Footer />
    </div>
  );
}
