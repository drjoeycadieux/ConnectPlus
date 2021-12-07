import "./styles.css";

// components

import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

export default function Advertise() {
  return (
    <div className="app">
      <NavHeader />
      <div id="header">
        <h3>Advertise Page</h3>
      </div>
      <FooterPage />
    </div>
  );
}
