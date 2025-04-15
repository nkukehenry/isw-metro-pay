"use client"

import { useState, useEffect } from "react"
import Button from "../ui/button"
import { ChevronLeft, Phone } from "lucide-react"

export default function FormInput({ paymentOption, onSubmit, onBack, hideBack = false }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    email: "",
  })

  const [errors, setErrors] = useState({})

  // If there's a fixed price, set it as the amount
  useEffect(() => {
    if (paymentOption.price) {
      const numericPrice = paymentOption.price.replace(/[^0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        amount: numericPrice,
      }))
    }
  }, [paymentOption])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits"
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required"
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = "Amount must be a positive number"
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="space-y-6 flex-1">
      {!hideBack && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#001f3f]">Enter Details</h2>
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ChevronLeft size={18} />
            Back
          </Button>
        </div>
      )}

      {!hideBack && (
        <p className="text-gray-600">
          Option: <span className="font-medium">{paymentOption.name}</span>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block font-medium flex items-center gap-2">
            <Phone size={16} className="text-[#1E90FF]" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2
              ${errors.phoneNumber ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[#1E90FF]"}
            `}
            placeholder="Enter phone number"
            maxLength={10}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="amount" className="block font-medium">
            Amount (UGX) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2
              ${errors.amount ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[#1E90FF]"}
            `}
            placeholder="Enter amount"
            readOnly={paymentOption.price ? true : false}
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2
              ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[#1E90FF]"}
            `}
            placeholder="Enter email for receipt"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="pt-4">
          <Button type="submit" variant="primary" className="w-full">
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}
