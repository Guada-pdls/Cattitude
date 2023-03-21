import React from "react";
import FaqQuestion from "./FaqQuestion";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <h5 className="faq-subtitle">The following content is a demo.</h5>
      <div className="faqs">
        <FaqQuestion
          ask="How do I place an order?"
          question="Placing an order is easy! Simply browse our selection of products, select the items you want to purchase, and proceed to checkout. You can either create an account or checkout as a guest."
        />
        <FaqQuestion
          ask="What payment methods do you accept?"
          question="We accept all major credit cards, as well as PayPal."
        />
        <FaqQuestion
          ask="How long will it take to receive my order?"
          question="We process orders within 1-3 business days, and shipping times vary depending on your location. Most orders are delivered within 7-10 business days."
        />
        <FaqQuestion
          ask="What is your return policy?"
          question="We want you to be completely satisfied with your purchase, so we offer a 30-day money-back guarantee. If you're not happy with your product, simply contact us and we'll provide instructions for returning the item."
        />
        <FaqQuestion
          ask="Do you offer free shipping?"
          question="Yes, we offer free shipping on orders over $50."
        />
        <FaqQuestion
          ask="How do I track my order?"
          question="You will receive an email with a tracking number once your order has shipped. You can use this number to track your package on our website or the carrier's website."
        />
        <FaqQuestion
          ask="Do you offer international shipping?"
          question="Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on your location."
        />
        <FaqQuestion
          ask="How can I contact customer service?"
          question="You can contact us via email at cattitude@gmail.com, or by filling out the contact form on our website. We strive to respond to all inquiries within 24 hours."
        />
      </div>
    </>
  );
};

export default Faq;
