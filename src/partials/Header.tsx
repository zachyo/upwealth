import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Home", active: pathname === "/", url: "/" },
    {
      label: "Contact Us",
      active: pathname === "/contactUs",
      url: "/contactUs",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full h-[90px] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] z-[100] flex items-center transition-shadow duration-300",
          isScrolled && "shadow-neomorphic bg-[#F0F0F3]"
        )}
      >
        <nav className="px-6 lg:px-28 w-full flex items-center justify-between">
          {/* LOGO */}
          <div
            className="w-[150px] lg:w-[211px] h-[40px] bg-[url(/upwealth-text-logo-1.svg)] bg-contain bg-no-repeat cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-12">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => navigate(item.url)}
                variant="ghost"
                className={cn(
                  "inline-flex h-auto hover:shadow-inner-complex items-center gap-2.5 p-2 rounded-lg [font-family:'Montserrat',Helvetica]",
                  item.active
                    ? "bg-[#f1f0f3] shadow-inner-complex"
                    : "bg-transparent",
                  "hover:bg-[#f1f0f3]"
                )}
              >
                <span className="font-normal text-black text-xl">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>

          {/* DESKTOP LOGIN BUTTON */}
          <div className="hidden lg:inline-flex w-[145px] h-14 relative items-start">
            {" "}
            <Button className="inline-flex h-auto hover:inner-color-hover items-start gap-2.5 px-10 py-4 bg-[#f0f0f3] rounded-lg overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
              {" "}
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
                {" "}
                Log In{" "}
              </span>{" "}
            </Button>{" "}
          </div>
          {/* MOBILE BURGER ICON */}
          <div
            className="lg:hidden w-[40px] h-[40px] bg-[#f0f0f3] rounded-lg shadow-neomorphic flex items-center justify-center active:shadow-inner-complex"
            onClick={() => setMobileOpen(true)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-1 bg-[#ccc] rounded shadow-neomorphic"></span>
              <span className="block w-6 h-1 bg-[#ccc] rounded shadow-neomorphic"></span>
              <span className="block w-6 h-1 bg-[#ccc] rounded shadow-neomorphic"></span>
            </div>
          </div>
        </nav>
      </header>

      {/* SLIDE DOWN MOBILE MENU */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen backdrop-blur-sm z-[200] transition-transform duration-300",
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div
          className="bg-[#f0f0f3] h-fit p-6 py-8 w-[90%] mx-auto [font-family:'Montserrat',Helvetica] shadow-mobile-nav rounded-b-2xl"
          style={{
            boxShadow:
              "-1px -1px 2px 0 #fff,-5px -5px 11.5px 0 #fff,1px 1px 2px 0 #00000040,5px 5px 8.5px 0 #00000040",
          }}
        >
          {/* CLOSE ICON */}
          <div
            className="absolute top-6 left-12 w-10 h-10 rounded-lg bg-[#f0f0f3] shadow-neomorphic flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-4xl font-bold text-gray-500">×</span>
          </div>

          {/* MENU TITLE */}
          <h2 className="text-center text-xl font-semibold mb-12">Menu</h2>

          <div className="flex flex-col gap-6 px-4">
            {navigationItems.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  navigate(item.url);
                  setMobileOpen(false);
                }}
                className="bg-[#f0f0f3] shadow-neomorphic py-2.5 rounded-xl text-base"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                navigate("/login");
                setMobileOpen(false);
              }}
              className="bg-[#f0f0f3] shadow-neomorphic py-2.5 rounded-xl text-base text-purple-700 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
