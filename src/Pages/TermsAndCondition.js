import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-sm text-gray-200 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-black/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Terms & Conditions
        </h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">1. Introduction</h2>
          <p className="text-gray-300 text-sm">
            Welcome to Ereck! By using our website, you agree to comply with these Terms & Conditions. Please read them carefully.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">2. Use of Services</h2>
          <p className="text-gray-300 text-sm">
            You agree to use Ereck only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">3. Intellectual Property</h2>
          <p className="text-gray-300 text-sm">
            All content, logos, and materials on this website are the property of Ereck and protected by applicable intellectual property laws.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">4. Privacy</h2>
          <p className="text-gray-300 text-sm">
            Your use of our website is also governed by our Privacy Policy, which explains how we collect and use your information.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-300 text-sm">
            Ereck shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">6. Changes to Terms</h2>
          <p className="text-gray-300 text-sm">
            We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">7. Contact Us</h2>
          <p className="text-gray-300 text-sm">
            For any questions regarding these terms, please <a href="/ContactUs" className="text-yellow-400 hover:text-yellow-300">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
