"use client"
import { useState } from "react"
import Card from "../ui/card"
import Button from "../ui/button"
import { ChevronLeft, Info, X, Smartphone, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react"
import FormInput from "./form-input"
import SimCardForm from "./sim-card-form"
import { motion, AnimatePresence } from "framer-motion"

const specialCategories = ["Forex","Accommodation"]

export default function PaymentOptionSelection({ options, service, category, onSubmit, onBack }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({})

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setShowForm(true)
    setShowPreview(false)
    setShowSuccess(false)
  }

  const handleFormSubmit = (data) => {
    console.log('data', data);
    console.log('category', category);
    setFormData(data)
    
    setShowPreview(true)
    
  }

  const handleProceed = () => {
    if (specialCategories.includes(category.name)) {
      setShowSuccess(true)
    } else {
      onSubmit({
        option: selectedOption,
        formData,
      })
    }
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setShowPreview(false)
    setShowSuccess(false)
    setSelectedOption(null)
    setFormData({})
  }

  // Format amount with commas
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#001f3f]">Select Payment Option</h2>
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ChevronLeft size={18} />
          Back
        </Button>
      </div>

      <p className="text-gray-600">
        Service: <span className="font-medium">{service.name}</span>
      </p>

      <div className="relative">
        {/* Payment Options Section */}
        <div className="w-full">
          {options.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
                <X size={32} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-2">Service Unavailable</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                We apologize, but this service is currently unavailable. Please try again later or select a different service.
              </p>
              <Button
                variant="outline"
                onClick={onBack}
                className="flex items-center gap-2"
              >
                <ChevronLeft size={18} />
                Back to Services
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {options.map((option) => (
                <Card
                  key={option.name}
                  title={option.name}
                  icon={option.icon}
                  price={option.price}
                  description={option.description}
                  onClick={() => handleOptionSelect(option)}
                  selected={selectedOption?.name === option.name}
                  className="p-2 text-sm"
                  LucideIcon={null}
                />
              ))}
            </div>
          )}
        </div>

        {/* Guides Section */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E90FF]/10 text-[#1E90FF]">
              <Info size={12} />
            </div>
            <span>Select a payment option to proceed</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E90FF]/10 text-[#1E90FF]">
              <Info size={12} />
            </div>
            <span>You can change your selection later</span>
          </div>
        </div>

        {/* Right Side Modal */}
        <AnimatePresence>
          {showForm && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={handleCloseForm}
              />
              
              {/* Modal */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white shadow-xl z-50 p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-[#001f3f]">
                    {showSuccess ? "Success" : showPreview ? "Review Payment" : "Enter Details"}
                  </h3>
                  <Button
                    variant="outline"
                    onClick={handleCloseForm}
                    className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000]/10"
                  >
                    <ChevronLeft size={18} />
                    Back
                  </Button>
                </div>

                {showSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <CheckCircle2 size={64} className="text-green-500 mb-4" />
                    <h4 className="text-2xl font-bold text-[#001f3f] mb-4">
                      {`Connected to Trusted ${category.name} Provider`}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      You will receive detailed information via email or SMS shortly.
                      Our trusted partner will contact you to discuss your requirements.
                    </p>
                    <Button
                      onClick={handleCloseForm}
                      className="w-full max-w-xs"
                    >
                      Close
                    </Button>
                  </div>
                ) : !showPreview ? (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-[#1E90FF]">
                        <div className="flex items-center gap-1">
                          <Smartphone size={16} />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1">
                          <CreditCard size={16} />
                          <span className="font-medium">{selectedOption?.name}</span>
                        </div>
                      </div>
                    </div>

                    {category.name === "Sim Cards" ? (
                      <SimCardForm 
                        service={service} 
                        paymentOption={selectedOption} 
                        onSubmit={handleFormSubmit} 
                        onBack={onBack}
                        hideBack={true} 
                      />
                    ) : (
                      <FormInput 
                        paymentOption={selectedOption} 
                        onSubmit={handleFormSubmit} 
                        onBack={onBack}
                        hideBack={true} 
                      />
                    )}
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-600">Please confirm your payment details</p>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-blue-100">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-500">Category</p>
                          <p className="font-medium">{category.name}</p>
                        </div>

                        <div>
                          <p className="text-gray-500">Service</p>
                          <p className="font-medium">{service.name}</p>
                        </div>

                        <div>
                          <p className="text-gray-500">Option</p>
                          <p className="font-medium">{selectedOption.name}</p>
                        </div>

                        {formData.phoneNumber && (
                          <div>
                            <p className="text-gray-500">Phone Number</p>
                            <p className="font-medium">{formData.phoneNumber}</p>
                          </div>
                        )}

                        {formData.fullName && (
                          <div>
                            <p className="text-gray-500">Full Name</p>
                            <p className="font-medium">{formData.fullName}</p>
                          </div>
                        )}

                        <div className="col-span-2">
                          <p className="text-gray-500">Amount</p>
                          <p className="font-bold text-xl">{selectedOption.price || formatAmount(formData.amount)}</p>
                        </div>

                        {formData.email && (
                          <div className="col-span-2">
                            <p className="text-gray-500">Email (for receipt)</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowPreview(false)} 
                        className="flex-1 flex items-center justify-center gap-2"
                      >
                        <ChevronLeft size={18} />
                        Edit
                      </Button>
                      <Button 
                        variant="primary" 
                        onClick={handleProceed} 
                        className="flex-1 flex items-center justify-center gap-2"
                      >
                        Pay Now
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
