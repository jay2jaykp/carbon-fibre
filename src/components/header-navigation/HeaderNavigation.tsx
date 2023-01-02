import React, { Children, PropsWithChildren } from "react";

const HeaderNavigation: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className="h-full border-l">
      <ul className="flex list-none h-full">{children}</ul>
    </nav>
  );
};

export default HeaderNavigation;
