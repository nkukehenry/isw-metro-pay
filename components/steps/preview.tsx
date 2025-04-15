"use client"
import Button from "../ui/button"
import { ChevronLeft, ArrowRight } from "lucide-react"

export default function Preview({ category, service, paymentOption, formData, onProceed, onBack }) {
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
        <h2 className="text-2xl font-bold text-[#001f3f]">Review Payment</h2>
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ChevronLeft size={18} />
          Back
        </Button>
      </div>

      <p className="text-gray-600">Please confirm your payment details</p>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-100">
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
            <p className="font-medium">{paymentOption.name}</p>
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
            <p className="font-bold text-xl">{paymentOption.price || formatAmount(formData.amount)}</p>
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
        <Button variant="outline" onClick={onBack} className="flex-1 flex items-center justify-center gap-2">
          <ChevronLeft size={18} />
          Edit
        </Button>
        <Button variant="primary" onClick={onProceed} className="flex-1 flex items-center justify-center gap-2">
          Pay Now
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  )
}
