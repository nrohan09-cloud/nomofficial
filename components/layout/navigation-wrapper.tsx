"use client";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const NavigationWrapper = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  // Use resolvedTheme for more reliable theme detection, fallback to light mode during loading
  const logoUrl = mounted && resolvedTheme === "dark" 
    ? "/logo-nomnom-dark-mode.png" 
    : "/logo-nomnom.png";

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