"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? "dark" : "light";
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={currentTheme}
    />
  );
}
