import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-sm text-gray-200 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-black/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Privacy Policy
        </h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">1. Introduction</h2>
          <p className="text-gray-300 text-sm">
            Your privacy is important to us. This Privacy Policy explains how Ereck collects, uses, and protects your information when you visit our website.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">2. Information We Collect</h2>
          <p className="text-gray-300 text-sm">
            We may collect personal information such as your name, email address, and other details you provide when contacting us or using our services.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-300 text-sm">
            Your information is used to improve our services, respond to inquiries, send updates, and ensure a personalized user experience.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">4. Sharing of Information</h2>
          <p className="text-gray-300 text-sm">
            We do not sell or share your personal information with third parties except when required by law or to provide services.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">5. Cookies and Tracking</h2>
          <p className="text-gray-300 text-sm">
            Our website may use cookies and similar technologies to enhance user experience and analyze site traffic.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">6. Security</h2>
          <p className="text-gray-300 text-sm">
            We implement appropriate measures to protect your information, but please note that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">7. Changes to This Policy</h2>
          <p className="text-gray-300 text-sm">
            We may update this Privacy Policy from time to time. Continued use of the website constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">8. Contact Us</h2>
          <p className="text-gray-300 text-sm">
            For any questions regarding this Privacy Policy, please <a href="/ContactUs" className="text-yellow-400 hover:text-yellow-300">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
