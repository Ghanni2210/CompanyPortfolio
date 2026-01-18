import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of processes can you automate?',
      answer: 'We can automate a wide range of business processes including workflow automation, customer service responses, data processing, email marketing, social media management, inventory tracking, report generation, and much more. Our AI solutions are customized to fit your specific business needs and can integrate with your existing tools and systems.',
    },
    {
      question: 'Do I need technical knowledge to use your service?',
      answer: "Not at all! Our platform is designed to be user-friendly for non-technical users. We handle all the technical implementation and provide comprehensive training and support. You can focus on your business while we take care of the automation setup, monitoring, and maintenance.",
    },
    {
      question: 'Can you integrate with our existing tools?',
      answer: 'Yes, absolutely! We specialize in seamless integrations with popular business tools including CRM systems, email platforms, project management tools, accounting software, and more. Our team will work with you to ensure all your existing systems work together harmoniously with our AI automation solutions.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on the complexity of your requirements, but most projects are completed within 2-6 weeks. Simple automations can be set up in just a few days, while more complex enterprise solutions may take 8-12 weeks. We provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'Is your AI secure and compliant?',
      answer: 'Security and compliance are our top priorities. We follow industry-standard security protocols, use encrypted data transmission, and comply with GDPR, HIPAA, and other relevant regulations. All data is processed securely, and we provide detailed security documentation for enterprise clients.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              FAQ'S
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            Everything you need to know about our AI automation services
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full text-left p-6 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:bg-white/5"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-[#e87811]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
