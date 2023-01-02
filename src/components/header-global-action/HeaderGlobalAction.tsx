import React, { DetailedHTMLProps, PropsWithChildren } from "react";

const HeaderGlobalAction: React.FC<
  PropsWithChildren<
    DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  >
> = ({ children, ...props }) => {
  return (
    <span className="inline-block" {...props}>
      <button className="flex justify-center items-center hover:bg-stone-200 h-12 w-12">
        {children}
      </button>
    </span>
  );
};

export default HeaderGlobalAction;
