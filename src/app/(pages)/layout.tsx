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
        </main>
    );
}
