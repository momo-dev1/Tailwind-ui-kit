import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";

const SideBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[270px] bg-[#111827] text-[#9CA3AA] px-6 min-h-screen py-8">
      <div className="flex items-center justify-between pt-3 text-xl cursor-pointer">
        <h2>Components</h2>
        <div className="w-8 h-8">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
