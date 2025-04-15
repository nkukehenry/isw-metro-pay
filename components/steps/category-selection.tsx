"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SquareCard from "../ui/square-card"
import HomeSlider from "../ui/home-slider"
import { Phone, Car, CreditCard, Building, DollarSign, BarChart, FileText, Lightbulb, X } from "lucide-react"
import Button from "../ui/button"
import Card from "../ui/card"

interface Category {
  name: string
  description?: string
}

interface Service {
  name: string
  icon: string
}

interface CategorySelectionProps {
  categories: Category[]
  services: Record<string, Service[]>
  onSelect: (service: Service,category:Category) => void
  onBack: () => void
}

// Map category names to Lucide icons
const categoryIcons: Record<string, any> = {
  Airtime: Phone,
  Parking: Car,
  "Sim Cards": CreditCard,
  Accommodation: Building,
  Forex: DollarSign,
  Data: BarChart,
  Taxes: FileText,
  Utilities: Lightbulb,
}

export default function CategorySelection({ categories, services, onSelect, onBack }: CategorySelectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [showServiceModal, setShowServiceModal] = useState(false)

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category)
    setShowServiceModal(true)
  }

  const handleCloseModal = () => {
    setShowServiceModal(false)
    setSelectedCategory(null)
  }

  const handleServiceSelect = (service: Service,category:Category) => {
    onSelect(service,category)
    handleCloseModal()
  }

  return (
    <div className="space-y-0">
      <HomeSlider />

      <h4 className="text-2xl font-bold text-[#001f3f] py-2">What do you want to pay for?</h4>
     
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {categories.map((category) => (
          <SquareCard
            key={category.name}
            title={category.name}
            LucideIcon={categoryIcons[category.name]}
            description={category.description}
            onClick={() => handleCategorySelect(category)}
          />
        ))}
      </motion.div>

      {/* Service Selection Modal */}
      <AnimatePresence>
        {showServiceModal && selectedCategory && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={handleCloseModal}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-full md:w-1/2 h-screen bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center p-6 border-b">
                  <h3 className="text-xl font-bold text-[#001f3f]">Select a Service</h3>
                  <Button
                    variant="ghost"
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="p-6 flex-1">
                  <p className="text-gray-600 mb-4">
                    Category: <span className="font-medium">{selectedCategory.name}</span>
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {services[selectedCategory.name]?.map((service) => (
                      <Card
                        key={service.name}
                        title={service.name}
                        icon={service.icon}
                        onClick={() => handleServiceSelect(service,selectedCategory)}
                        className="min-w-[150px]"
                        LucideIcon={null}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
