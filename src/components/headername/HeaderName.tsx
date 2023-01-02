import React, { PropsWithChildren } from "react";

const HeaderName: React.FC<PropsWithChildren<{ prefix: string }>> = ({
  children,
  prefix,
}) => {
  return (
    <a className="flex items-center text-[#161616] tracking-[0.1px] px-4 text-sm h-full font-ibm-sans border-[2px] border-transparent font-semibold">
      <span className="font-normal">{prefix}</span>&nbsp;[{children}]
    </a>
  );
};

export default HeaderName;
