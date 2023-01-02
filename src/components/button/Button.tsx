import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "text-white pl-4 pr-16 font-ibm-sans text-sm inline-flex items-center border focus:border-blue-700 focus:shadow-[inset_0_0_0_1px_#1d4ed8,inset_0_0_0_2px_#fff]",
  {
    variants: {
      intent: {
        primary: "bg-blue-600 hover:bg-blue-700 ",
        secondary: "bg-neutral-900",
        tertiary:
          "border border-blue-700 hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white",
        danger: "bg-red-600",
        ghost: "border-transparent",
        "danger-ghost": "",
        "danger-tertiary": "border border-red-600",
      },
      size: {
        small: "h-8",
        medium: "h-10",
        large: "h-12",
        xl: "h-16",
        "2xl": "h-20",
      },
      skeleton: {
        true: [
          "animate-pulse bg-gray-400 text-gray-400 hover:bg-gray-400 cursor-not-allowed border-0",
        ],
      },
    },
    compoundVariants: [
      {
        intent: ["ghost", "tertiary"],
        skeleton: false,
        class: "bg-white text-blue-700",
      },
      {
        intent: ["danger-ghost", "danger-tertiary"],
        skeleton: false,
        class: "bg-white text-red-600",
      },
      {
        size: ["xl", "2xl"],
        class: "pt-4 items-baseline",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "large",
      skeleton: false,
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  skeleton,
  ...props
}) => {
  return (
    <button className={buttonStyles({ intent, size, skeleton })} {...props} />
  );
};
