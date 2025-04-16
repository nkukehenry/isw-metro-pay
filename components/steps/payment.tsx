"use client"

import { useState } from "react"
import Button from "../ui/button"
import SideGuide from "../ui/side-guide"
import { QRCodeSVG } from "qrcode.react"
import { ChevronLeft, CreditCard, Smartphone, QrCode, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type PaymentMethod = "card" | "mobile" | "qr" | null

interface PaymentProps {
  onSelectMethod: (method: PaymentMethod) => void
  selectedMethod: PaymentMethod
  onBack: () => void
}

export default function Payment({ onSelectMethod, selectedMethod, onBack }: PaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const handleMethodSelect = (method: PaymentMethod) => {
    if (method === "mobile") {
      setShowPaymentModal(true)
    } else {
      setIsProcessing(true)
      onSelectMethod(method)
      setShowPaymentModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowPaymentModal(false)
    setIsProcessing(false)
    setPhoneNumber("")
    setPhoneError("")
  }

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/
    return phoneRegex.test(phone)
  }

  const handlePhoneSubmit = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid phone number")
      return
    }
    setIsProcessing(true)
    onSelectMethod("mobile")
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#001f3f]">Payment Method</h2>
        {!isProcessing && (
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ChevronLeft size={18} />
            Back
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {!selectedMethod ? (
            <>
              <p className="text-gray-600 mb-4">Choose how you want to pay</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="secondary"
                  className="h-20 flex items-center justify-center"
                  onClick={() => handleMethodSelect("card")}
                >
                  <span className="flex items-center gap-3">
                    <div className="flex items-center">
                      <CreditCard size={24} className="text-[#1E90FF] mr-2" />
                      <span>Pay with Card</span>
                    </div>
                  </span>
                </Button>

                <Button
                  variant="secondary"
                  className="h-20 flex items-center justify-center"
                  onClick={() => handleMethodSelect("mobile")}
                >
                  <span className="flex items-center gap-3">
                    <Smartphone size={24} className="text-[#1E90FF]" />
                    Mobile Money
                  </span>
                </Button>

                <Button
                  variant="secondary"
                  className="h-20 flex items-center justify-center sm:col-span-2"
                  onClick={() => handleMethodSelect("qr")}
                >
                  <span className="flex items-center gap-3">
                    <QrCode size={24} className="text-[#1E90FF]" />
                    Scan QR Code
                  </span>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 border-4 border-[#001f3f] border-t-[#1E90FF] rounded-full animate-spin"></div>
              <p className="text-lg font-medium">Processing your payment...</p>
              <p className="text-gray-600 text-center">
                {selectedMethod === "card"
                  ? "Your card is being processed. Please do not refresh the page."
                  : "Connecting to mobile money provider. Please do not refresh the page."}
              </p>
            </div>
          )}
        </div>

        <div className="md:w-1/4">
          <SideGuide title="Secure Payments">
            <p>
              All payment methods are secured with industry-standard encryption to protect your financial information.
            </p>
          </SideGuide>

          <SideGuide title="Payment Options">
            <ul className="space-y-1 list-disc list-inside">
              <li>Card payments via secure QR</li>
              <li>Mobile Money transfers</li>
              <li>QR code for banking apps</li>
            </ul>
          </SideGuide>
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 md:inset-4 bg-white rounded-lg shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#001f3f]">
                    {selectedMethod === "qr" ? "Scan QR Code" : 
                     selectedMethod === "mobile" ? "Mobile Money Payment" : 
                     "Complete Payment"}
                  </h3>
                  <Button
                    variant="ghost"
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={20} />
                  </Button>
                </div>

                {selectedMethod === "qr" ? (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <p className="text-gray-600 text-center">
                      Scan this QR code with your mobile to complete payment
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <QRCodeSVG
                        value="https://gateway.quickteller.co.ke/e3d4bd5090f70385d9129a81e1decfb41bd25897"
                        size={200}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                  </div>
                ) : selectedMethod === "card" ? (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="bg-[#1E90FF]/10 p-6 rounded-lg w-full">
                     
                      <h3 className="text-lg font-medium text-center mb-2">Scan QR Code to Pay with Card</h3>

                      <p className="text-gray-600 text-center mb-4">
                        For enhanced security, please scan this QR code to complete the card payment.
                      </p>

                      <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
                        <QRCodeSVG
                          value="https://gateway.quickteller.co.ke/e3d4bd5090f70385d9129a81e1decfb41bd25897"
                          size={180}
                          level="H"
                          includeMargin={true}
                        />
                      </div>

                      <p className="text-sm text-gray-500 text-center mt-4">This secure method protects your card details</p>
                    </div>
                  </div>
                ) : selectedMethod === "mobile" ? (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    {selectedMethod === "mobile" ? (
                      <>
                        <div className="w-full max-w-md space-y-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={phoneNumber}
                              onChange={(e) => {
                                setPhoneNumber(e.target.value)
                                setPhoneError("")
                              }}
                              placeholder="Enter your phone number"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent"
                            />
                            {phoneError && (
                              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                            )}
                          </div>
                          <Button
                            onClick={handlePhoneSubmit}
                            className="w-full"
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="w-16 h-16 border-4 border-[#001f3f] border-t-[#1E90FF] rounded-full animate-spin"></div>
                        <p className="text-lg font-medium">Processing your payment...</p>
                        <p className="text-gray-600 text-center">
                          Connecting to mobile money provider. Please do not refresh the page.
                        </p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
