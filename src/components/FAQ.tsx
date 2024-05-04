import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: 'Do You Support Paypal & Card?',
        answer: 'Yes We Support Apple & Google Pay, Paypal f&f, Crypto, Cashapp & Card',
    },
    {
        question: 'How Long Will It Take To Get The Cheat After I Send The Money?',
        answer: 'Our website operates entirely on automation, ensuring instant delivery. Upon payment receipt, you can expect to receive an email within moments!',
    },
    {
        question: 'Where Do I Go If I Need Support?',
        answer: 'Feel free to join our Discord server and create a support ticket. Our dedicated staff team is ready to assist you promptly.',
    },
]

const FAQ = () => {
    return (
        <div id="faq" className="md:-mt-[7rem]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-100 font-poppins">Frequently asked questions</h2>
                        <p className="mt-4 text-base leading-7 text-gray-400">
                            Can’t find the answer you’re looking for? Reach out to our{' '}
                            <Link href="https://discord.gg/bqZfgtEBep" className="font-semibold text-blue-500 hover:text-blue-600">
                                customer support
                            </Link>{' '}
                            team via Discord
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            <Accordion type="single" collapsible className="dark w-full">
                                {faqs.map((faq, index) => (
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