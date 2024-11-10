function terms() {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <div className="header text-center py-5">
        <div className="header-overlay"></div>
        <h1>Terms of Use</h1>
        <p>Effective Date: November 1, 2024</p>
      </div>

      {/* <!-- Terms of Use Content --> */}
      <div className="container my-5 bg-light text-dark p-3">
        <div className="policy-content">
          {/* <!-- Introduction --> */}
          <h2 className="section-title">Terms of Use Overview</h2>
          <p>
            Welcome to the website of Studio 99, Inc. (the “Company”). By
            accessing or using our website, you agree to comply with and be
            bound by the following Terms of Use. If you do not agree to these
            terms, please do not use our website.
          </p>

          {/* <!-- Section 1: Services Provided --> */}
          <h3 className="section-title">1. Services Provided</h3>
          <p>
            Studio 99, Inc. provides users with the opportunity to view and
            engage with content related to video, television, movies, plays,
            films, and short productions. Users may submit demos and request to
            have their content aired on our network.
          </p>

          {/* <!-- Section 2: User Submissions --> */}
          <h3 className="section-title">2. User Submissions</h3>
          <p>
            Users may submit video demos and related media for review and
            potential airing on the Studio 99 network. By submitting any
            content, you represent and warrant that:
          </p>
          <ul>
            <li>
              You own or have the necessary licenses, rights, consents, and
              permissions to submit such content.
            </li>
            <li>
              Your content does not violate the rights of any third party.
            </li>
          </ul>

          {/* <!-- Section 3: Content Review and Approval --> */}
          <h3 className="section-title">3. Content Review and Approval</h3>
          <p>
            Studio 99, Inc. reserves the right to review all submissions and
            determine, at its sole discretion, whether the content will be aired
            on its network. Submission does not guarantee approval or airing.
          </p>

          {/* <!-- Section 4: Intellectual Property --> */}
          <h3 className="section-title">4. Intellectual Property</h3>
          <p>
            All content provided on this website, including but not limited to
            text, graphics, logos, images, and software, is the property of
            Studio 99, Inc. or its content providers and is protected by
            copyright and other intellectual property laws.
          </p>

          {/* <!-- Section 5: Governing Law --> */}
          <h3 className="section-title">5. Governing Law</h3>
          <p>
            This Agreement and any disputes arising from or related to the use
            of this website shall be governed by and construed in accordance
            with the laws of the State of Florida.
          </p>

          {/* <!-- Contact Information --> */}
          <h3 className="section-title">6. Contact Information</h3>
          <p>
            For any questions or concerns regarding these Terms of Use, please
            contact us at:
          </p>
          <address>
            Studio 99, Inc.
            <br />
            Email: <a href="mailto:Terms@Studio-99.org">Terms@Studio-99.org</a>
          </address>

          <p>
            By using our website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default terms;
