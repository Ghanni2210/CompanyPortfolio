import React from 'react';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Automation',
      us: true,
      others: false,
    },
    {
      feature: 'Custom Solutions',
      us: true,
      others: false,
    },
    {
      feature: '24/7 Support',
      us: true,
      others: true,
    },
    {
      feature: 'Seamless Integration',
      us: true,
      others: false,
    },
    {
      feature: 'Scalable Infrastructure',
      us: true,
      others: true,
    },
    {
      feature: 'Data Security & Compliance',
      us: true,
      others: true,
    },
    {
      feature: 'Real-time Analytics',
      us: true,
      others: false,
    },
    {
      feature: 'Dedicated Account Manager',
      us: true,
      others: false,
    },
    {
      feature: 'Free Consultation',
      us: true,
      others: false,
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-[#050505] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-5">
            <span className="text-[14px] text-[#858585] font-manrope font-normal leading-none tracking-normal text-left rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
              COMPARISON
            </span>
          </div>
          <h2 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.25em] text-center capitalize text-white mx-auto w-full max-w-[568px] mb-6">
            Why Choose Us Over Others
          </h2>
          <p className="text-base font-normal text-[#aaaaaa] leading-[1.6] text-center max-w-[600px] mx-auto">
            See how our AI automation solutions stand out from the competition
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-5 text-left text-base font-semibold text-white">
                    Features
                  </th>
                  <th className="px-6 py-5 text-center text-base font-semibold text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-[#e87811]">The Quick AI</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center text-base font-semibold text-gray-400">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="px-6 py-5 text-gray-300">{item.feature}</td>
                    <td className="px-6 py-5 text-center">
                      {item.us ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e87811]/20">
                          <svg
                            className="w-4 h-4 text-[#e87811]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {item.others ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-500/20">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Ready to experience the difference?
          </p>
          <a href="#contact" className="framer-button inline-flex items-center">
            <span className="button-text">Get Started Today</span>
            <span className="icon-wrapper">
              <svg
                className="arrow arrow-in"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(222,222,222)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
              <svg
                className="arrow arrow-out"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(222,222,222)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
