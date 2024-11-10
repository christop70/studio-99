function privacy() {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <div className="header text-center py-5">
        <div className="header-overlay"></div>
        <h1>Privacy Policy</h1>
        <p>Effective Date: November 1, 2024</p>
      </div>

      {/* <!-- Privacy Policy Content --> */}
      <div className="container my-5 bg-light text-dark p-3">
        <div className="policy-content">
          {/* <!-- Introduction --> */}
          <h2 className="section-title">Privacy Policy Overview</h2>
          <p>
            At Studio 99, Inc., we are committed to protecting your privacy.
            This Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you visit and interact with our website.
          </p>

          {/* <!-- Section 1: Information Collection --> */}
          <h3 className="section-title">1. Information Collection</h3>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and any other data you provide when
            submitting forms, registering for services, or communicating with
            us. Additionally, we may collect non-personal data, including IP
            addresses and browsing behavior, for analytical purposes.
          </p>

          {/* <!-- Section 2: Use of Information --> */}
          <h3 className="section-title">2. Use of Information</h3>
          <p>The information collected is used to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>
              Communicate with you about content, updates, and promotional
              information.
            </li>
            <li>
              Review and process submissions for potential airing on our
              network.
            </li>
          </ul>

          {/* <!-- Section 3: Data Sharing and Disclosure --> */}
          <h3 className="section-title">3. Data Sharing and Disclosure</h3>
          <p>
            Studio 99, Inc. does not sell or share your personal information
            with third parties, except as required by law or to protect our
            legal rights. We may share data with service providers who assist us
            in website operations, provided they agree to maintain the
            confidentiality of your data.
          </p>

          {/* <!-- Section 4: Data Security --> */}
          <h3 className="section-title">4. Data Security</h3>
          <p>
            We implement reasonable security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no method
            of transmission over the internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          {/* <!-- Section 5: Cookies and Tracking Technologies --> */}
          <h3 className="section-title">
            5. Cookies and Tracking Technologies
          </h3>
          <p>
            Our website may use cookies and similar technologies to enhance your
            experience, analyze usage, and customize content. You can modify
            your browser settings to decline cookies, but this may limit certain
            functionalities of the site.
          </p>

          {/* <!-- Section 6: Your Rights --> */}
          <h3 className="section-title">6. Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your personal information.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Opt-out of receiving promotional communications.</li>
          </ul>

          {/* <!-- Section 7: Governing Law --> */}
          <h3 className="section-title">7. Governing Law</h3>
          <p>
            This Privacy Policy is governed by the laws of the State of Florida.
          </p>

          {/* <!-- Section 8: Changes to this Policy --> */}
          <h3 className="section-title">8. Changes to this Policy</h3>
          <p>
            Studio 99, Inc. reserves the right to update or modify this Privacy
            Policy at any time. Changes will be posted on this page, and the
            effective date will be updated accordingly.
          </p>

          {/* <!-- Contact Information --> */}
          <h3 className="section-title">Contact Information</h3>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at:
          </p>
          <address>
            Studio 99, Inc.
            <br />
            Email:{" "}
            <a href="mailto:Privacy@Studio-99.org">Privacy@Studio-99.org</a>
          </address>

          <p>
            By using our website, you acknowledge that you have read,
            understood, and agree to this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default privacy;
