import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto  pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">About Trade Snap</h1>
      <div className="text-lg mb-6">
        <p>
          Trade Snap is your go-to destination for all your online shopping
          needs. We are passionate about connecting buyers with the best
          sellers, offering a wide range of products from electronics and
          fashion to home essentials.
        </p>
        <p className="mt-4">
          At Trade Snap, we believe in providing a seamless and secure shopping
          experience. Our platform brings together high-quality products,
          competitive prices, and exceptional customer service.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission at Trade Snap is to make online shopping simple,
          enjoyable, and reliable. We aim to empower buyers and sellers by
          fostering trust, promoting innovation, and ensuring customer
          satisfaction.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            Customer Satisfaction: We prioritize our customers' happiness and
            strive to exceed their expectations.
          </li>
          <li className="mb-2">
            Integrity: We conduct our business with honesty, transparency, and
            fairness.
          </li>
          <li className="mb-2">
            Innovation: We embrace creativity and constantly seek new ways to
            enhance the shopping experience.
          </li>
          <li className="mb-2">
            Community: We foster a sense of community among our users, sellers,
            and employees.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
