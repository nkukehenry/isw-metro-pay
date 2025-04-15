"use client"

import { motion } from "framer-motion"

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) {
  const variants = {
    primary: "bg-[#800000] hover:bg-[#600000] text-white shadow-sm",
    secondary: "bg-[#001f3f] hover:bg-[#00152b] text-white shadow-sm",
    outline: "bg-transparent border border-[#001f3f] text-[#001f3f] hover:bg-gray-50",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all
        focus:outline-none focus:ring-2 focus:ring-[#ADD8E6] focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
}
