import "../App.css";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img
            src="/src/assets/Logo CyberPrev.png"
            alt="Logo CyberPrev"
            width="75"
            height="75"
            className="d-inline-block align-text-center"
          />
          CyberPrev SpA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
