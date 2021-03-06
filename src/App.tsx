import "./styles.css";

// components
import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

import SiteAlerts from "./components/SiteAlerts";

export default function App() {
  return (
    <div className="App">
      <NavHeader />
      <SiteAlerts />
      <div id="header">
        <h2>
          ConnectPlus <span className="aria-hidden">++</span>
        </h2>
        <br />
        <hr />
        <br />
        <p>
          Using advanced satellites in a low orbit, ConnectPlus enables video
          calls, online gaming, streaming, and other high data rate activities
          that historically have not ...
        </p>
      </div>

      <div id="product"></div>

      <div id="content">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          molestias dolore? Amet magni cupiditate nemo architecto adipisci
          incidunt soluta quaerat, laudantium illo rem praesentium dolorem sit
          rerum exercitationem ipsam beatae.
        </h2>
      </div>

      <div id="info">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis
          explicabo illo, dolorem et dolorum voluptatem molestiae a quod laborum
          laudantium, quas modi quis culpa. Excepturi asperiores itaque repellat
          vel!
        </h2>
      </div>
      <FooterPage />
    </div>
  );
}
