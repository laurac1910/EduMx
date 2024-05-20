/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-8">
          <div className="container">
            <div className=" flex items-center justify-between ">
            
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li >
                      <Link to="/HomeThree">
                        Inicio
                      </Link>
                      
                    </li>
                    <li >
                      <Link to="/AboutTwo">Sobre Nosotros</Link>
                      
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/Courses">Cursos</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/Courses">
                            Cursos
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/ContactUs">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
