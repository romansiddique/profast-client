import React from "react";
import logo from "../../../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <div className="flex justify-center items-end">
        <img className="w-[38px] h-[48px]" src={logo} alt="" />
        <p className="text-3xl font-semibold">Profast</p>
      </div>
    </div>
  );
};

export default Logo;
