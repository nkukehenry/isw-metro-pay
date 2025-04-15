"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SquareCardProps {
  title: string
  icon?: string
  onClick?: () => void
  selected?: boolean
  className?: string
  LucideIcon?: any
  description?: string
}

export default function SquareCard({
  title,
  icon,
  onClick,
  selected = false,
  className = "",
  LucideIcon,
  description,
}: SquareCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        cursor-pointer rounded-lg p-3 shadow-sm transition-all
        ${selected ? "bg-[#1E90FF]/20 border-2 border-[#001f3f]" : "bg-white hover:bg-gray-50 border border-gray-100"}
        ${className}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-2 min-h-[120px]">
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
        <div className="text-center">
          <h3 className="text-sm font-medium">{title}</h3>
          {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </div>
      </div>
    </motion.div>
  )
} 