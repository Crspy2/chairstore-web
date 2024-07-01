import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {client} from "../../sanity/lib/client";

type Question = {
    question: string,
    answer: string
}

const FAQ = async () => {
    const questions: Question[] = await client.fetch('*[_type == "faq"] | order(_createdAt asc)')

    return (
        <div id="faq" className="md:-mt-[7rem]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-100 font-poppins">Frequently asked questions</h2>
                        <p className="mt-4 text-base leading-7 text-gray-400">
                            Can’t find the answer you’re looking for? Reach out to our{' '}
                            <Link href="https://discord.gg/bqZfgtEBep" className="font-semibold text-[#725893] hover:text-[#8667af]">
                                customer support
                            </Link>{' '}
                            team via Discord
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            <Accordion type="single" collapsible className="dark w-full">
                                {questions.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={faq.question}
                                        className="group"
                                    >
                                        <AccordionTrigger className="group-hover:font-bold text-gray-200">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
