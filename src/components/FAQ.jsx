import { useState } from "react";
import faqImg from "../assets/faq.png";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What is Other Opinion?",
      answer:
        "Other Opinion is a community-driven platform where users can share their opinions, insights, and recommendations on various products across different categories. Whether you're looking for tech gadgets, home appliances, fashion items, or anything in between, Other Opinion provides an inclusive space for users to discover alternative perspectives and make informed decisions.",
    },
    {
      question: "How does Other Opinion work?",
      answer:
        "Other Opinion works by allowing users to post queries about specific products they're interested in finding alternatives for. Other users can then provide recommendations, reviews, and insights based on their own experiences with similar products. It's a collaborative platform where the collective knowledge of the community helps users explore new options and make better choices.",
    },
    {
      question: "Can I trust the recommendations on Other Opinion?",
      answer:
        "While we strive to maintain a high standard of quality and authenticity on our platform, it's important to remember that opinions and recommendations are subjective and based on individual experiences. We encourage users to consider multiple viewpoints and conduct their own research before making any purchasing decisions.",
    },
    {
      question: "How can I contribute to Other Opinion?",
      answer:
        "You can contribute to Other Opinion by sharing your own experiences, insights, and recommendations on products that you have used or are familiar with. Simply create an account, browse the queries posted by other users, and provide your input where you feel knowledgeable. Your contributions help enrich the community and empower others to make informed choices.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about Other Opinion and how our
            platform works
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-purple-500 shadow-lg shadow-purple-500/10"
                    : "border-gray-700"
                }`}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium text-white">
                    {item.question}
                  </h3>
                  <div
                    className={`ml-4 p-1 rounded-full transition-colors ${
                      openIndex === index
                        ? "bg-purple-500/20 text-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-800/30">
              <h3 className="text-xl font-medium text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-4">
                Can't find the answer you're looking for? Please reach out to
                our customer support team.
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg transition-all hover:from-purple-500 hover:to-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
            <div className="relative">
              <div className="overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-2xl">
                <img
                  src={faqImg}
                  alt="FAQ Illustration"
                  className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 10.5H16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14H13.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">24/7 Support</div>
                    <div className="text-xs text-gray-400">
                      We're here to help
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
