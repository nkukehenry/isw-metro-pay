"use client"

import { motion } from "framer-motion"
import Card from "../ui/card"
import Button from "../ui/button"
import { ChevronLeft } from "lucide-react"

export default function ServiceSelection({ services, category, onSelect, onBack }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#001f3f]">Select a Service</h2>
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ChevronLeft size={18} />
          Back
        </Button>
      </div>

      <p className="text-gray-600">
        Category: <span className="font-medium">{category.name}</span>
      </p>

      <div className="overflow-x-auto pb-4">
        <motion.div
          className="flex space-x-4 min-w-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {services.map((service) => (
            <Card
              key={service.name}
              title={service.name}
              icon={service.icon}
              onClick={() => onSelect(service)}
              className="min-w-[150px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
