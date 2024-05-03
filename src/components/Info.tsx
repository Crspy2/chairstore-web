import Card from "@/components/ui/reveal-card";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {CreditCard, Fingerprint, LockKeyhole, MessagesSquare, Settings} from "lucide-react";

const Info = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                <h3 className="text-6xl font-bold text-gray-100 font-poppins">Well Made</h3>
                <p className=" text-gray-300 text-center">
                    Our products are made by veterans in the field of game hacking, and have been tested
                    thoroughly before distribution to make sure that your experience is the best it can be.
                    Below, you can see the three pillars which we build our business on top of:
                </p>
            </div>
            <div className="max-w-6xl py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
            <Card title="Easy to Setup" description="Customize the features in our products to match your playstyle. Enable or disable features on a dime!" icon={<Settings className="h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Secure" description="We are convinced to provide secure products that remain undetected and keep our customers anonymous." icon={<LockKeyhole className="h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card title="Support" description="We provide a fast and effective support team which works around the clock to answer all your product related questions." icon={<MessagesSquare className="h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const AceternityIcon = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
                style={{ mixBlendMode: "darken" }}
            />
        </svg>
    );
};



export default Info;