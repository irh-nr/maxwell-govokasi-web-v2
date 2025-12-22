import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "How do I enroll in a program?",
    answers: [
      "You can enroll directly through our website by selecting the learning pathway that matches your goals.",
      "Once registered, you will receive onboarding guidance and access to your learning dashboard.",
    ],
  },
  {
    value: "item-2",
    question: "Is there a fee for joining the program?",
    answers: [
      "We offer both free and paid programs depending on the pathway you choose.",
      "Financial assistance or sponsorship may be available for qualified learners.",
    ],
  },
  {
    value: "item-3",
    question: "How does the mentorship or promotion system work?",
    answers: [
      "Learners who complete the required modules and assessments may qualify for mentorship sessions with industry professionals.",
      "Promotion to advanced tracks is based on performance, submissions, and skill competency evaluations.",
    ],
  },
  {
    value: "item-4",
    question: "Can I choose my preferred field or specialization?",
    answers: [
      "Yes, you are free to choose a specialization that aligns with your interests and career goals.",
      "Some advanced fields may require completing foundational modules first to ensure readiness.",
    ],
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 flex flex-col justify-between gap-16 items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Question</h2>
            <p className="inline-block mt-2">
              Didn’t find an answer to your questions? Contact us, and we’ll be
              happy to help!
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-3/4"
            defaultValue="item-1"
          >
            {faqData.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance">
                  {faq.answers.map((ans, idx) => (
                    <p key={idx}>{ans}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="hidden flex-col lg:flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <Accordion
                type="single"
                collapsible
                className="w-3/4"
                defaultValue="item-1"
              >
                {faqData.map((faq) => (
                  <AccordionItem key={faq.value} value={faq.value}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col text-balance">
                      {faq.answers.map((ans, idx) => (
                        <p key={idx}>{ans}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="max-w-2xl flex justify-center items-center">
              <Accordion
                type="single"
                collapsible
                className="w-3/4"
                defaultValue="item-1"
              >
                {faqData.map((faq) => (
                  <AccordionItem key={faq.value} value={faq.value}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col text-balance">
                      {faq.answers.map((ans, idx) => (
                        <p key={idx}>{ans}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
