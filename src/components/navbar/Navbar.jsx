import React, { useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import navCSS from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "../../assets/logo.svg";
const navigation = [
  { name: "Home", to: "/home" },
  { name: "Locator", to: "/hospitallocator" },
  { name: "Details", to: "/hospitaldetails" },
  { name: "Booking", to: "/appointmentbooking" },
];

// Utility function to conditionally apply classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" "); // Filter out falsy values
}
export default function Navbar() {
  const token = useSelector((state) => state.auth.token); // Access the token from Redux
  console.log(token);
  useEffect(() => {
    window.addEventListener("scroll", navbarChangeBg);
    return () => {
      window.removeEventListener("scroll", navbarChangeBg);
    };
  }, []);

  function navbarChangeBg() {
    const navBar = document.getElementById("navBar");
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      navBar.classList.replace("bg-transparent", "bg-white");
    } else {
      navBar.classList.replace("bg-white", "bg-transparent");
    }
  }
  return (
    <>
      <Disclosure
        id="navBar"
        as="nav"
        className={`${navCSS.cg} fixed top-0 left-0 w-full bg-transparent py-1 transition-all z-50`}
      >
        <div className="mx-auto max-w-[75rem] p-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-pr hover:bg-pr hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pr transition">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  to="/home"
                  className="flex items-center justify-center sm:justify-start"
                >
                  {/* <img src={logo} className="w-[70%]" alt="" /> */}
                  <h1 className="text-3xl font-semibold">
                    <span className="text-da">Medi</span>
                    <span className="text-pr">Connect</span>
                  </h1>
                </Link>
              </div>
              <div className="hidden w-3/4  sm:mx-6 lg:block ">
                <div className="flex h-full items-center justify-around capitalize space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-pr text-light" // use bg-primary and text-light
                            : " text-da hover:bg-pr hover:text-light transition", // use hover states accordingly
                          "rounded-md px-3 py-2 text-[17px] font-medium cursor-pointer"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {token ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      type="button"
                      className="relative rounded-full p-1 hover:bg-pr hover:text-light transition"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 p-2 top-12 z-50 mt-2 origin-top-right rounded-md bg-lighttext-light shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
                  >
                    <TextField
                      className="w-[200px]"
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                      size="small"
                    />
                  </MenuItems>
                </Menu> */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      type="button"
                      className="relative rounded-full p-1 hover:bg-pr hover:text-light transition"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 top-12 z-50 mt-2 w-48 origin-top-right rounded-md bg-lighttext-light py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
                  >
                    <div className="p-2 font-bold text-center">
                      no notifications
                    </div>
                  </MenuItems>
                </Menu>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 top-12 z-50 mt-2 w-48 origin-top-right rounded-md bg-lighttext-light py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
                  >
                    <MenuItem>
                      <NavLink
                        to="/userprofile"
                        className={({ isActive }) =>
                          classNames(
                            "block px-4 py-2 text-sm text-center hover:bg-pr hover:text-light transition",
                            isActive && "bg-c3 text-light"
                          )
                        }
                      >
                        Your Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        to="/support"
                        className={({ isActive }) =>
                          classNames(
                            "block px-4 py-2 text-sm text-center hover:bg-pr hover:text-light transition",
                            isActive && "bg-c3 text-light"
                          )
                        }
                      >
                        Support
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <button className="block w-full px-4 py-2 text-sm text-center hover:bg-pr hover:text-light transition">
                        Sign out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            ) : (
              <div className=" flex justify-between text-[16px] items-center space-x-2">
                <Link
                  to="/register"
                  className="rounded-md px-3 py-2 text-[17px] font-medium ourbtn "
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-pr text-light" // use bg-primary and text-light
                      : " hover:bg-pr hover:text-light transition", // use hover states accordingly
                    "rounded-md px-3 py-2 text-[17px] font-medium cursor-pointer"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
