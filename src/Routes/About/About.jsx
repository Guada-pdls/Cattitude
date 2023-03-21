import React from "react";
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <h5>The following content is a demo.</h5>
      <p>
        Welcome to our online store dedicated to providing the best products for
        kittens! At <span className="name">Cattitude</span>, we are passionate
        about helping pet owners give their furry friends the care they deserve.
        Our mission is to provide high-quality products that are both practical
        and stylish, so you and your kitten can enjoy a happy and healthy life
        together.
      </p>
      <div className="about-img"><img src="http://placekitten.com/420/307" alt="" /></div>
      <p>
        We started this store because we noticed that there was a gap in the
        market for pet products that were both functional and aesthetically
        pleasing. We wanted to create a place where pet owners could find
        everything they need for their kittens in one convenient location,
        without sacrificing quality or style.
      </p>
      <p>
        Our team is made up of experienced pet owners and enthusiasts who
        understand the importance of providing pets with the best possible care.
        We carefully curate each product in our store to ensure that it meets
        our high standards for quality, durability, and design.
      </p>
      <p>
        Whether you're looking for toys, grooming supplies, bedding, or anything
        else to make your kitten's life more comfortable, we have you covered.
        We offer a wide selection of products from trusted brands that are sure
        to meet your needs and exceed your expectations.
      </p>
      <div className="about-img"><img src="http://placekitten.com/420/309" alt="" /></div>
      <p>
        Thank you for choosing <span className="name">Cattitude</span> as your
        go-to destination for all things kitten-related. We hope you enjoy our
        products as much as we do, and we look forward to serving you and your
        furry friend for years to come!
      </p>
    </div>
  );
};

export default About;
