import React from "react";
import logo from "../../../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <div className="flex justify-center items-end">
        <img className="w-[38px] h-[40px] md:h-[48px] mb-2" src={logo} alt="" />
        <p className="text-2xl md:text-3xl font-extrabold -ml-4">Profast</p>
      </div>
    </div>
  );
};

export default Logo;
