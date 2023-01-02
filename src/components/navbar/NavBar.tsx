import { cva, VariantProps } from "class-variance-authority";
import HeaderName from "../headername/HeaderName";
import { Search, Notification, Switcher } from "@carbon/icons-react";
import HeaderGlobalAction from "../header-global-action/HeaderGlobalAction";
import HeaderGlobalBar from "../header-global-bar/HeaderGlobalBar";
import HeaderNavigationItem from "../header-navigation-item/HeaderNavigationItem";
import HeaderNavigation from "../header-navigation/HeaderNavigation";

const navbarStyles = cva("border-b h-12", {
  variants: {},
  defaultVariants: {},
});

interface NavigationProps extends VariantProps<typeof navbarStyles> {}

const NavBar: React.FC<NavigationProps> = ({ ...props }) => {
  return (
    <header className="flex items-center border-b h-12 w-full font-ibm-sans">
      <HeaderName prefix="IBM">Platform</HeaderName>
      <HeaderNavigation>
        <HeaderNavigationItem>Link 1</HeaderNavigationItem>
        <HeaderNavigationItem>Link 2</HeaderNavigationItem>
        <HeaderNavigationItem>Link 3</HeaderNavigationItem>
        <HeaderNavigationItem>Link 4</HeaderNavigationItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction>
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction>
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction>
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </header>
  );
};

export default NavBar;
