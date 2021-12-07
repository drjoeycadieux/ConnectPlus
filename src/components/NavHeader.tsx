export default function NavHeader() {
  return (
    <div className="app">
      <div id="nav">
        <ul>
          <li>
            <a id="title" href="/">
              ConnectPlus
            </a>
            <span>Beta</span>
          </li>
          <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/whoweare">Who We Are</a>
          </li>
          <li>
            <a href="/advertise">Advertise</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
