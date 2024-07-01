import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Products from "../../components/Groups";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="dark">
            <Hero />
            <Features />
            <Products />
            <FAQ />
            <Footer />
        </div>
    );
}
