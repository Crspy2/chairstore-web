import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Products from "@/components/Products";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="dark">
            <Hero />
            <Info />
            <Products />
            <FAQ />
            <Footer />
        </main>
    );
}
