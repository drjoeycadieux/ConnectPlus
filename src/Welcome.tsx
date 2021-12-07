import "./styles.css";

// components

import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

export default function Welcome() {
  return (
    <div className="app">
      <NavHeader />
      <div id="header">
        <h2>Welcome</h2>
      </div>
      <div id="welcome-content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit
          sunt, blanditiis commodi facilis vero vel dolores ipsa ad minus
          tenetur est. Modi eius nisi laudantium ea aliquid accusantium alias.
        </h3>
      </div>
      <div id="wel-info">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
          facere quis non! Officiis commodi odit fuga voluptas sint molestiae
          labore aperiam eum sequi ea architecto veritatis, facilis magnam enim?
        </h3>
      </div>
      <FooterPage />
    </div>
  );
}
