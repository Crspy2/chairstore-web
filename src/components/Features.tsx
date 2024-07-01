import Card from "@/components/ui/reveal-card";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {LockKeyhole, MessagesSquare, Settings} from "lucide-react";
import {client} from "../../sanity/lib/client";

type InfoData = {
    title: string,
    description: string,
    subtitle1: string,
    content1: string
    subtitle2: string,
    content2: string
    subtitle3: string,
    content3: string
}

const Features = async () => {
    const data: InfoData = (await client.fetch('*[_type == "features"]'))[0]

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-bold text-gray-100 font-poppins">{data.title}</h3>
                <p className="text-sm md:text-base text-gray-300 text-center mx-8 lg:mx-0">{data.description}</p>
            </div>
            <div className="max-w-6xl py-20 flex flex-row items-center justify-center w-full gap-4 mx-auto px-8">
                <Card title={data.subtitle1} description={data.content1} icon={<Settings className="bg-zinc-950 h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title={data.subtitle2} description={data.content2} icon={<LockKeyhole className="h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
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
                <Card title={data.subtitle3} description={data.content3} icon={<MessagesSquare className="h-10 w-10 text-white group-hover/canvas-card:text-white" />}>
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


export default Features;