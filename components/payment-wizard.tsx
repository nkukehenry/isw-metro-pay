"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CategorySelection from "./steps/category-selection"
import PaymentOptionSelection from "./steps/payment-option-selection"
import Payment from "./steps/payment"
import Status from "./steps/status"
import ProgressBar from "./ui/progress-bar"

// Dummy data
import { categories, services, paymentOptions } from "@/lib/dummy-data"
import Header from "./ui/header"

interface Category {
  name: string
  description?: string
}

interface Service {
  name: string
  icon: string
}

interface PaymentOption {
  name: string
  icon: string
  price: string
  description: string
}

type PaymentMethod = "card" | "mobile" | "qr" | null

export default function PaymentWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<PaymentOption | null>(null)
  const [formData, setFormData] = useState({})
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failure" | null>(null)

  const totalSteps = 3 // Reduced steps since we combined category and service selection

  const handleServiceSelect = (service: Service,category:Category) => {
    setSelectedService(service)
    setSelectedCategory(category)
    setCurrentStep(2)     
  }

  const handlePaymentOptionAndFormSubmit = (data: { option: PaymentOption; formData: any }) => {
    setSelectedPaymentOption(data.option)
    setFormData(data.formData)
    setCurrentStep(3)
  }

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setPaymentMethod(method)
    // Simulate payment processing
    setTimeout(() => {
      // Randomly succeed or fail for demo purposes
      const success = Math.random() > 0.3
      setPaymentStatus(success ? "success" : "failure")
    }, 10000)
  }

  const handleReset = () => {
    setCurrentStep(1)
    setSelectedService(null)
    setSelectedPaymentOption(null)
    setFormData({})
    setPaymentMethod(null)
    setPaymentStatus(null)
  }

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="relative min-h-full overflow-y-auto">
      <div className="container mx-auto px-0 py-0">
       
        {/* <ProgressBar currentStep={currentStep} totalSteps={totalSteps} /> */}

        <div className="bg-gray-50 rounded-lg p-6 py-0 mt-0 h-full flex flex-col">
        <Header/>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <CategorySelection 
                  categories={categories} 
                  services={services}
                  onSelect={handleServiceSelect}
                  onBack={goBack}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <PaymentOptionSelection
                  options={selectedService ? paymentOptions[selectedService.name as keyof typeof paymentOptions] : []}
                  service={selectedService}
                  category={selectedCategory}
                  onSubmit={handlePaymentOptionAndFormSubmit}
                  onBack={goBack}
                />
              </motion.div>
            )}

            {currentStep === 3 && !paymentStatus && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <Payment 
                  onSelectMethod={handlePaymentMethodSelect} 
                  selectedMethod={paymentMethod} 
                  onBack={goBack} 
                />
              </motion.div>
            )}

            {currentStep === 3 && paymentStatus && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <Status status={paymentStatus} onReset={handleReset} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
