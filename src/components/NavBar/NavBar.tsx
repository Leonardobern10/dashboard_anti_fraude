import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Menu from "./Menu";
import OpenMenu from "./OpenMenu";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && <Menu changeVisibility={handleToggleSidebar} />}
      </AnimatePresence>

      {!isVisible && <OpenMenu changeVisibility={handleToggleSidebar} />}
    </>
  );
}
