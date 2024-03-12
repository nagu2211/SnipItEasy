interface faqs {
  question : String,
  answer: String
}
const faqs = [
  {
    question: 'What is a URL shortener?',
    answer: 'A URL shortener is an online tool that converts long web addresses into shorter, more shareable links. It simplifies link management and enhances the aesthetic of URLs.',
  },
  {
    question: 'How does this URL shortener work?',
    answer:
      'Our URL shortener takes a long web address and generates a shorter link that automatically redirects to the original destination. Users simply input the long URL into our platform and receive a short link for sharing.',
  },
  {
    question: 'Is it safe to use a shortened link?',
    answer:
      "Yes, security is a priority. Our URL shortener actively monitors generated links to prevent and mitigate potential threats. However, it's always advisable to stay vigilant and ensure links come from trusted sources.",
  },
  {
    question: 'Is it free to use this service?',
    answer: 'Yes, basic use of our URL shortener is entirely free. We also offer premium plans with additional features for users requiring more advanced and personalized services.',
  },
  {
    question: 'Can I customize the shortened links?',
    answer: 'Yes, we provide the option to customize shortened links to fit your needs. This allows you to create more memorable and relevant links.',
  },
  {
    question: 'How long will my shortened links remain active?',
    answer: 'Shortened links generated are permanent, as long as they comply with our usage policies. We recommend reviewing our policies for more details.',
  },
  {
    question: 'Can I undo the action of shortening a link?',
    answer: "No, once a URL has been shortened, it cannot be reverted. It's important to verify the URL before shortening to avoid issues later on.",
  },
  {
    question: 'How can I contact technical support in case of issues?',
    answer: 'If you encounter problems or have additional questions, you can reach out to our technical support team via santiago2211ar@hotmail.com. We will be happy to assist you.',
  },
];

export function FAQsection() {
  return (
    <div className="space-y-4 py-7 px-6 bg-[#f5f6f7]">
      {faqs.map((faq, index) => (
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
