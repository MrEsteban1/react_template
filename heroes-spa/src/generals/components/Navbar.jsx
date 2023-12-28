import { Link, NavLink, useNavigate } from "react-router-dom";

const NavbarCollapseButton = () => {
  return (
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
  );
};

const NavbarList = ({ options = [] }) => {
  return (
    <ul className="navbar-nav">
      {options.map((option, i) => (
        <li key={option.label + i} className="nav-item">
          <NavLink
            className={(data) => {
              return data.isActive ? "nav-link Active" : "nav-link";
            }}
            to={option.link}
          >
            {option.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const Navigator = useNavigate();
  const options = [
    { label: "Home", link: "/" },
    { label: "Marvel", link: "/marvel" },
    { label: "DC", link: "/dc" },
  ];
  const onLogout = () => {
    Navigator("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link className="navbar-brand p-2" to="/">
          Heroes App
        </Link>
        <NavbarCollapseButton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavbarList options={options} />
          <div className="navbar-collapse w-100 order-3 dual-collapse d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-primary">Esteban</span>
              <button
                className="nav-item nav-link btn btn-primary"
                onClick={onLogout}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
