"use client"

import { useState } from "react"
import Button from "../ui/button"
import SideGuide from "../ui/side-guide"
import { ChevronLeft, User, Mail, Phone, Truck } from "lucide-react"

export default function SimCardForm({ service, paymentOption, onSubmit, onBack, hideBack = false }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid"
    }

    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits"
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
    <div className="space-y-6">
      {!hideBack && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#001f3f]">SIM Card Details</h2>
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ChevronLeft size={18} />
            Back
          </Button>
        </div>
      )}

      {!hideBack && (
        <p className="text-gray-600">
          Service: <span className="font-medium">{service.name}</span> - Option:{" "}
          <span className="font-medium">{paymentOption.name}</span>
        </p>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <form onSubmit={handleSubmit} className="space-y-4 flex-1">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block font-medium flex items-center gap-2">
              <User size={16} className="text-[#1E90FF]" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2
                ${errors.fullName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[#1E90FF]"}
              `}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium flex items-center gap-2">
              <Mail size={16} className="text-[#1E90FF]" />
              Email <span className="text-red-500">*</span>
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
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block font-medium flex items-center gap-2">
              <Phone size={16} className="text-[#1E90FF]" />
              Phone Number (Optional)
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
              placeholder="Enter alternative phone number"
              maxLength={10}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          
            <div className="bg-[#1E90FF]/10 p-2 rounded-lg flex items-start mt-2">
              <Truck className="text-[#1E90FF] mr-3 mt-1" size={20} />
              <p className="text-sm">
              {paymentOption.name === "Physical SIM" && "Your SIM card will be delivered within 2-3 days."}
              {paymentOption.name === "eSIM" && "You will receive SIM details via email."}
            </p>
            </div>
          

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full">
              Continue to Payment
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}
