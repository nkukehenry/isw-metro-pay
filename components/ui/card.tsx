"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Card({
  title,
  icon,
  onClick,
  selected = false,
  className = "",
  LucideIcon,
  price = null,
  description = null,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        cursor-pointer rounded-lg p-2 shadow-sm transition-all
        ${selected ? "bg-[#1E90FF]/20 border-2 border-[#001f3f]" : "bg-white hover:bg-gray-50 border border-gray-100"}
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {LucideIcon ? (
          <div className="text-[#1E90FF]">
            <LucideIcon size={24} />
          </div>
        ) : (
          icon && (
            <div>
              <Image src={icon || "/placeholder.svg"} alt={title} width={32} height={32} className="object-contain" />
            </div>
          )
        )}
        <div className="flex flex-col">
          <h3 className="font-medium">{title}</h3>
          {price && <p className="text-xs font-bold text-[#800000]">{price}</p>}
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
    </motion.div>
  )
}
