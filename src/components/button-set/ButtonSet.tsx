import { cva, VariantProps } from "class-variance-authority";
import React, {type PropsWithChildren} from "react";



export const ButtonSet: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex gap-[1px]">
      {children}
    </div>
  );
};
