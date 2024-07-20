import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
