import React, { PropsWithChildren } from "react";

const HeaderNavigationItem: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <li>
      <a className="h-full flex items-center px-4 border-[2px] border-transparent text-sm cursor-pointer hover:bg-stone-200">
        {children}
      </a>
    </li>
  );
};

export default HeaderNavigationItem;
