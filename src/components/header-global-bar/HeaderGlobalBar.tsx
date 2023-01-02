import React, { PropsWithChildren } from "react";

const HeaderGlobalBar: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex grow justify-end">{children}</div>;
};

export default HeaderGlobalBar;
