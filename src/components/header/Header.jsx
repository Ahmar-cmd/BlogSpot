import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";

function Header() {
  const [toggle, setToggle] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-100">
      <Container>
        <nav className="flex flex-wrap items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/*  Mobile Navigation */}
          <div className="block md:hidden">
            <button className="text-white focus:outline-none">
              <img
                src={toggle ? "/src/assets/close.svg" : "/src/assets/menu.svg"}
                alt="Menu"
                className="object-contain cursor-pointer"
                onClick={() => setToggle((prev) => !prev)}
              />
            </button>

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-gray-300 absolute top-15 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-4 py-2 hover:bg-white transition ease-in-out font-normal cursor-pointer rounded-xl text-[16px]"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>
          </div>

         {/* Desktop Navigation */}
          <ul className="md:flex hidden ml-auto space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 hover:bg-gray-300 transition ease-in-out font-normal cursor-pointer rounded-xl text-[16px]"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );  
}

export default Header;
