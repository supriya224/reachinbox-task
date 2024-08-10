// src/Home.js
import React from "react";
import Sidebar from "../components/shared/Sidebar/Sidebar";
const Home = () => {
  return (
    <div className="flex bg-black text-white">
      <Sidebar />
     <section className="w-full">
      {/* head */}
      <div className="bg-[#1F1F1F] p-4">Onebox</div>
     </section>
    </div>
  );
};

export default Home;
