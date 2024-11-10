function ssl() {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <div className="header text-center py-5">
        <div className="header-overlay"></div>
        <h1>SSL Policy</h1>
        <p>Effective Date: November 1, 2024</p>
      </div>

      {/* <!-- SSL Policy Content --> */}
      <div className="container my-5 bg-light text-dark p-3">
        <div className="policy-content">
          {/* <!-- Introduction --> */}
          <h2 className="section-title">SSL Policy Overview</h2>
          <strong>Effective Date: November 1, 2024</strong>
          <p>
            At Studio 99, Inc., we are committed to ensuring the security and
            privacy of our users’ data. This SSL Policy explains how we use
            Secure Sockets Layer (SSL) technology to protect data transmitted on
            our website.
          </p>

          {/* <!-- Section 1: What is SSL? --> */}
          <h3 className="section-title">1. What is SSL?</h3>
          <p>
            SSL (Secure Sockets Layer) is a standard security protocol that
            establishes encrypted links between a web server and a browser. This
            encryption ensures that all data passed between the web server and
            browsers remains private and secure.
          </p>

          {/* <!-- Section 2: How We Use SSL --> */}
          <h3 className="section-title">2. How We Use SSL</h3>
          <p>Studio 99, Inc. employs SSL technology to:</p>
          <ul>
            <li>
              Protect the transmission of sensitive information, such as
              personal and financial data.
            </li>
            <li>
              Ensure that data entered on our website is encrypted and
              transmitted securely.
            </li>
            <li>
              Verify our identity as a trusted website, providing confidence in
              our online services.
            </li>
          </ul>

          {/* <!-- Section 3: SSL Certification --> */}
          <h3 className="section-title">3. SSL Certification</h3>
          <p>
            Our website is secured with an SSL certificate issued by a
            recognized Certificate Authority (CA). This certificate validates
            our website’s identity and enables secure connections.
          </p>

          {/* <!-- Section 4: User Responsibility --> */}
          <h3 className="section-title">4. User Responsibility</h3>
          <p>
            While we strive to protect your data using SSL, users should also:
          </p>
          <ul>
            <li>
              Ensure that their browsers are updated to the latest version to
              support secure connections.
            </li>
            <li>
              Check for the padlock icon in the browser’s address bar,
              indicating an SSL-secured session.
            </li>
          </ul>

          {/* <!-- Section 5: Data Protection --> */}
          <h3 className="section-title">5. Data Protection</h3>
          <p>
            The use of SSL helps protect data such as login credentials,
            personal details, and payment information from interception or
            unauthorized access.
          </p>

          {/* <!-- Section 6: Changes to This SSL Policy --> */}
          <h3 className="section-title">6. Changes to This SSL Policy</h3>
          <p>
            Studio 99, Inc. reserves the right to modify this SSL Policy at any
            time. Any updates will be posted on this page with an updated
            effective date.
          </p>

          {/* <!-- Contact Information --> */}
          <h3 className="section-title">Contact Information</h3>
          <p>
            For any questions or concerns regarding this SSL Policy, please
            contact us at:
          </p>
          <address>
            Studio 99, Inc.
            <br />
            Email: <a href="mailto:SSL@Studio-99.org">SSL@Studio-99.org</a>
          </address>

          <p>
            By using our website, you acknowledge that you have read,
            understood, and agree to this SSL Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ssl;
