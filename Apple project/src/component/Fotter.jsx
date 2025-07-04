import React, { useState } from "react";
import flag from "../assets/icon/16.png";
import "../style/footer.css";
function Footer() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionKey) => {
    setActiveSection(activeSection === sectionKey ? null : sectionKey);
  };

  const footerLinks = [
    {
      sections: [
        {
          title: "Shop and Learn",
          links: [
            "Mac",
            "iPhone",
            "iPad",
            "Watch",
            "TV",
            "Music",
            "AirPods",
            "HomePod",
            "iPod touch",
            "Accessories",
            "Gift Cards",
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Services",
          links: [
            "Apple Music",
            "Apple TV+",
            "Apple Arcade",
            "Apple News+",
            "Apple Card",
            "iCloud",
          ],
        },
        {
          title: "Account",
          links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
        },
      ],
    },
    {
      sections: [
        {
          title: "For Business",
          links: ["Apple and Business", "Shop for Business"],
        },
        {
          title: "For Education",
          links: ["Apple and Education", "Shop for College"],
        },
        {
          title: "For Healthcare",
          links: ["Apple in Healthcare", "Apple Store Account", "iCloud.com"],
        },
        {
          title: "For Government",
          links: ["Apple and Education", "Shop for College"],
        },
      ],
    },
    {
      sections: [
        {
          title: "Apple Values",
          links: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Apple Camp",
            "Field Trip",
            "Apple Store App",
          ],
        },
        {
          title: "About Apple",
          links: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Apple Camp",
            "Field Trip",
            "Apple Store App",
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Apple Store",
          links: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Apple Camp",
            "Apple Store App",
            "Refurbished and Clearance",
            "Financing",
            "Apple Trade In",
            "Order Status",
            "Shopping Help",
          ],
        },
      ],
    },
  ];

  return (
    <div className="fotter-wrapper">
      {/* Legal section */}
      <div className="footer-legal">
        <p>
          1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
          promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in
          good condition. Additional trade‑in values require purchase of a new
          iPhone, subject to availability and limits. Must be at least 18. Apple
          or its trade-in partners reserve the right to refuse or limit any
          Trade In transaction for any reason. In‑store trade‑in requires
          presentation of a valid, government-issued photo ID (local law may
          require saving this information). Sales tax may be assessed on full
          value of new iPhone. Additional terms from Apple or Apple’s trade-in
          partners may apply. Monthly pricing: Available to qualified customers
          and requires 0% APR, 24-month installment loan with Citizens One or
          Apple Card Monthly Installments and iPhone activation with AT&T,
          Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
          Additional Apple Card Monthly Installments terms are in the Customer
          Agreement. Additional iPhone Payments terms are here.
        </p>
        <p>2. Subscription required.</p>
        <p>Magic Keyboard sold separately.</p>
        <p>
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
        <hr />
      </div>

      {/* Footer links */}
      <div className="footer-links-container">
        {footerLinks.map((group, groupIndex) => (
          <div key={groupIndex} className="footer-group">
            {group.groupTitle && (
              <h3 className="footer-group-title">{group.groupTitle}</h3>
            )}
            {group.sections.map((section, sectionIndex) => {
              const key = `${groupIndex}-${sectionIndex}`;
              return (
                <div key={key} className="footer-section">
                  <button
                    className="footer-section-title"
                    onClick={() => toggleSection(key)}
                    aria-expanded={activeSection === key}
                  >
                    {section.title}
                    <span className="toggle-icon">
                      {activeSection === key ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`footer-links ${
                      activeSection === key ? "active" : ""
                    }`}
                  >
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p className="mb-2">
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call
          <a href="#">1-800-MY-APPLE</a>.
        </p>

        <hr className="d-none d-md-block mb-3 custom-hr" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>

          <div className="footer-policy-links">
            <span>Privacy Policy |</span>
            <span>Terms of Use |</span>
            <span>Sales and Refunds |</span>
            <span>Legal |</span>
            <span>Site Map |</span>
          </div>

          <p className="footer-flag">
            <img src={flag} alt="flag" /> United States
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
