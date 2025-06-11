"use client";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import { useTheme } from "next-themes";

export const NavigationWrapper = () => {
  const { theme } = useTheme();
  
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  // Use dark mode logo when theme is dark, otherwise use light logo
  const logoUrl = theme === "dark" ? "/logo-nomnom-dark-mode.png" : "/logo-nomnom.png";

  return (
    <FloatingNavbar 
      navItems={navItems}
      logoUrl={logoUrl}
      showLogoOnMobile={true}
    >
      <ToggleTheme />
    </FloatingNavbar>
  );
}; 