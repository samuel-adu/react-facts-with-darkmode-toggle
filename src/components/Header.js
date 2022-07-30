import logo from "../images/react-icon-small.png";

function Header(props) {
  return (
    <header className={props.darkMode ? "dark" : ""}>
      <div className="nav container">
        <img className="nav__logo-icon" src={logo} alt="" />
        <h3 className="nav__logo-text">ReactFacts</h3>

        <div className="toggler">
          <p className="toggler__text toggler__text--light">Light</p>
          <div className="slider" onClick={props.toggleDarkMode}>
            <div className="slider__circle"></div>
          </div>
          <p className="toggler__text toggler__text--dark">Dark</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
