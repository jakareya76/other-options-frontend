import faqImg from "../assets/faq.png";

const FAQ = () => {
  return (
    <div className="container px-2 mx-auto">
      <h2 className="text-2xl font-semibold text-center md:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 my-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="my-5 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-medium collapse-title">
              What is Other Opinion?
            </div>
            <div className="collapse-content">
              <p>
                Other Opinion is a community-driven platform where users can
                share their opinions, insights, and recommendations on various
                products across different categories. Whether you're looking for
                tech gadgets, home appliances, fashion items, or anything in
                between, Other Opinion provides an inclusive space for users to
                discover alternative perspectives and make informed decisions.
              </p>
            </div>
          </div>
          <div className="my-5 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              How does Other Opinion work?
            </div>
            <div className="collapse-content">
              <p>
                Other Opinion works by allowing users to post queries about
                specific products they're interested in finding alternatives
                for. Other users can then provide recommendations, reviews, and
                insights based on their own experiences with similar products.
                It's a collaborative platform where the collective knowledge of
                the community helps users explore new options and make better
                choices.
              </p>
            </div>
          </div>
          <div className="my-5 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              Can I trust the recommendations on Other Opinion?
            </div>
            <div className="collapse-content">
              <p>
                While we strive to maintain a high standard of quality and
                authenticity on our platform, it's important to remember that
                opinions and recommendations are subjective and based on
                individual experiences. We encourage users to consider multiple
                viewpoints and conduct their own research before making any
                purchasing decisions.
              </p>
            </div>
          </div>
          <div className="my-5 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              How can I contribute to Other Opinion?
            </div>
            <div className="collapse-content">
              <p>
                You can contribute to Other Opinion by sharing your own
                experiences, insights, and recommendations on products that you
                have used or are familiar with. Simply create an account, browse
                the queries posted by other users, and provide your input where
                you feel knowledgeable. Your contributions help enrich the
                community and empower others to make informed choices.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={faqImg} alt="faq" className="w-full h-[480px]" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
