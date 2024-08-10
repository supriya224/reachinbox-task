import React, { useState } from "react";
import { Home } from "react-feather";
import { Send } from "react-feather";
import { BarChart } from "react-feather";
import { Book } from "react-feather";
import { Menu } from "react-feather";
import { User } from "react-feather";
import { Mail } from "react-feather";
// import { MessageCircle } from "react-feather";
import { ArrowRightCircle } from "react-feather";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { name, email, picture } = location.state;
  const [open, setOpen] = useState(true);
  return (
    <div className="flex overflow-hidden">
      <div
        className={` ${open ? " w-48" : "w-20"} h-screen bg-[#101113] text-white relative`}
      >
        <span className="" onClick={() => setOpen(!open)}>
          <ArrowRightCircle
          size={20}
            className={` absolute cursor-pointer rounded-full  outline-none -right-3 top-9 w-7   ${
              !open && "rotate-180 "
            }`}
          />
        </span>
        <div className="flex flex-col gap-48 justify-between items-center">
          <div className="pt-6">
            <Mail size={40} />
          </div>
          {/* icons */}
          <div className=" space-y-4 gap-12">
            <Home size={30} />
            <User size={30}  />
            <Send size={30}  />
            <Menu size={30}  />
            <BarChart size={30} />
            <Book size={30} />
          </div>
          <div>
            <div className="text-sm px-6 flex items-center justify-center">
              <img
                className="w-16 h-16 rounded-full "
                src={picture}
                alt={name}
              />
              {/* <h1 className=" text-xs font-bold text-gray-100">
                Welcome, {name}!
              </h1> */}
              {/* <p className="text-gray-100 text-xs">{email}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
