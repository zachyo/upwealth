import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Home", active: pathname === "/", url: "/" },
    { label: "Contact Us", active: pathname !== "/", url: "/contactUs" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(" top-0 left-0 w-full h-[112px] flex bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] z-[100] transition-shadow duration-300 fixed", isScrolled && "shadow-neomorphic bg-[#F0F0F3]")}>
      <nav className="px-28 w-full flex items-center justify-between">
        <div className="mt-[5.2px] w-[211px] h-[41.56px] bg-[url(/upwealth-text-logo-1.svg)] bg-[100%_100%]" />

        <div className="inline-flex mt-2 w-[254px] h-10 relative items-start gap-12">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => navigate(item.url)}
              variant="ghost"
              className={`inline-flex hover:shadow-inner-complex h-auto items-start gap-2.5 p-2 rounded-lg ${
                item.active
                  ? "bg-[#f1f0f3] shadow-inner-complex"
                  : "bg-transparent"
              } hover:bg-[#f1f0f3]`}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl whitespace-nowrap">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="inline-flex w-[145px] h-14 relative  items-start">
          <Button className="inline-flex h-auto hover:inner-color-hover items-start gap-2.5 px-10 py-4 bg-[#f0f0f3] rounded-lg overflow-hidden shadow-neomorphic focus:shadow-neomorphic-hover hover:bg-[#f0f0f3]">
            <span className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl whitespace-nowrap">
              Log In
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
