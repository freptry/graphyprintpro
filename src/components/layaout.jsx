import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const [winVh, setWinVh] = useState(window.innerHeight);
  const [winVw, setWinVw] = useState(window.innerWidth);

  useEffect(() => {
    const getWindowHeight = () => {
      setWinVh(window.innerHeight);
    };

    const getWindowWidth = () => {
      setWinVw(window.innerWidth);
    };

    window.addEventListener("resize", getWindowHeight);
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowHeight);
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);

  return (
    <>
      <div id="navbar" className="">
        <div id="navbar-title" className="">
          <Link to="/" className="navbar-brand">
            <>
              {(winVw < 768) | (winVh < 690) ? (
                winVw < 768 && winVh < 600 ? (
                  <>
                    <>S</>
                  </>
                ) : (
                  <>
                    <>Sofian</>
                  </>
                )
              ) : winVh >= 560 ? (
                <>
                  <>Sofian</>
                  <br />
                  <>MediaDev</>
                </>
              ) : (
                <>
                  <>Sofian</>
                </>
              )}
            </>
          </Link>
        </div>
        <nav id="navlinks" className="">
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="/branding"
                className={`nav-link ${
                  location.pathname === "/branding" ? "active" : ""
                }`}
              >
                {winVw < 768 ? (
                  winVh < 690 ? (
                    <>
                      <>B</>
                    </>
                  ) : (
                    <>
                      <>Branding</>
                    </>
                  )
                ) : (
                  <>
                    <>Branding</>
                  </>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/forprint"
                className={`nav-link ${
                  location.pathname === "/forprint" ? "active" : ""
                }`}
              >
                {winVw < 768 ? (
                  winVh < 690 ? (
                    <>
                      <>P</>
                    </>
                  ) : (
                    <>
                      <>For Print</>
                    </>
                  )
                ) : (
                  <>
                    <>For Print</>
                  </>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/motion"
                className={`nav-link ${
                  location.pathname === "/motion" ? "active" : ""
                }`}
              >
                {(winVw < 768) | (winVh < 690) ? (
                  winVw < 768 && winVh < 600 ? (
                    <>
                      <>M</>
                    </>
                  ) : (
                    <>
                      <>Motion</>
                    </>
                  )
                ) : winVh >= 560 ? (
                  <>
                    <>Motion</>
                    <br />
                    <>Design</>
                  </>
                ) : (
                  <>
                    <>Motion</>
                  </>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/webdev"
                className={`nav-link ${
                  location.pathname === "/webdev" ? "active" : ""
                }`}
              >
                {winVw < 768 ? (
                  winVh < 690 ? (
                    <>
                      <>W</>
                    </>
                  ) : (
                    <>
                      <>Web Sites</>
                    </>
                  )
                ) : (
                  <>
                    <>Web sites</>
                  </>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="container" className="">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
