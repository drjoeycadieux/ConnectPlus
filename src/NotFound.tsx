import "./styles.css";

// components

import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

export default function NotFound() {
  return (
    <div className="app">
      <NavHeader />
      <div id="header">
        <h3>Page Not Found</h3>
        <div id="goback">
          <a
            href="/"
            className="text-base font-medium text-yellow-600 hover:text-yellow-500"
          >
            Go Back Home
            <span className="aria-hidden"> → </span>
          </a>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}
