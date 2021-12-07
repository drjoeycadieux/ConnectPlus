import "./styles.css";

// components
import FooterPage from "./components/FooterPage";

import NavHeader from "./components/NavHeader";

export default function App() {
  return (
    <div className="App">
      <NavHeader />
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
      <div id="features">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          asperiores blanditiis at rerum alias quidem voluptate amet deserunt
          quod nostrum commodi eligendi dolore iste vero magnam, quos, qui
          beatae suscipit?
        </h2>
      </div>
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
