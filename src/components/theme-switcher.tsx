import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? "dark" : "light";
  return (
    <>
      <Button
        size="menu"
        variant="outline"
        onClick={() => setTheme(currentTheme)}
      >
        {currentTheme === "light" ? (
          <FaMoon className="w-6 h-6 rounded-full " />
        ) : (
          <FaSun className="w-6 h-6 rounded-full" />
        )}
      </Button>
    </>
  );
};
