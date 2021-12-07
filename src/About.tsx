import "./styles.css";

// components

import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

export default function About() {
  return (
    <div className="app">
      <NavHeader />
      <div id="header">
        <h2>About</h2>
      </div>
      <div id="about-content">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis nihil repellat minus doloremque, iusto quo tempore
          excepturi ad facilis cupiditate asperiores officia architecto, sit ab,
          nam labore nesciunt quas.
        </h3>
      </div>
      <div id="incorporate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolore
        neque recusandae quia ullam, accusamus qui dolorum quas veritatis veniam
        delectus ut aut aspernatur? Cupiditate sequi iure architecto deleniti
        nihil?
      </div>
      <FooterPage />
    </div>
  );
}
