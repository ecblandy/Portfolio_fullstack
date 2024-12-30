import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? "dark" : "light";
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize text-dark-primary">
            {currentTheme === "light" ? "claro" : "escuro"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
