import Link from "next/link";
import React from "react";

const Navlink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className=" text-[#ADB7BE] hover:text-white duration-300 transition-all "
    >
      {title}
    </Link>
  );
};

export default Navlink;
