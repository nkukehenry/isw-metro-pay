"use client"

import { useState } from "react"
import Card from "../ui/card"
import Button from "../ui/button"
import SideGuide from "../ui/side-guide"
import { ChevronLeft, Bed, Phone } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: "UGX 120,000",
    description: "Comfortable room with basic amenities",
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "UGX 180,000",
    description: "Spacious room with premium amenities",
  },
  {
    id: 3,
    name: "Executive Suite",
    price: "UGX 250,000",
    description: "Luxury suite with separate living area",
  },
  {
    id: 4,
    name: "Family Room",
    price: "UGX 220,000",
    description: "Large room suitable for families",
  },
]

export default function AccommodationSelection({ service, onSelect, onBack }) {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState("")

  const handleRoomSelect = (room) => {
    setSelectedRoom(room)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!phoneNumber) {
      setError("Phone number is required")
      return
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Phone number must be 10 digits")
      return
    }

    onSelect({
      ...selectedRoom,
      phoneNumber,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#001f3f]">Select a Room</h2>
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ChevronLeft size={18} />
          Back
        </Button>
      </div>

      <p className="text-gray-600">
        Service: <span className="font-medium">{service.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {rooms.map((room) => (
              <Card
                key={room.id}
                title={room.name}
                LucideIcon={Bed}
                price={room.price}
                description={room.description}
                onClick={() => handleRoomSelect(room)}
                selected={selectedRoom?.id === room.id}
              />
            ))}
          </div>

          {selectedRoom && (
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="font-medium">Contact Information</h3>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block font-medium flex items-center gap-2">
                  <Phone size={16} className="text-[#1E90FF]" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)
                    setError("")
                  }}
                  className={`
                    w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2
                    ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-[#1E90FF]"}
                  `}
                  placeholder="Enter phone number"
                  maxLength={10}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Continue to Payment
              </Button>
            </form>
          )}
        </div>

        <div className="md:w-1/4">
          <SideGuide title="Room Selection">
            <p>Select a room type that suits your needs. All rooms include:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Free Wi-Fi</li>
              <li>Breakfast</li>
              <li>Air conditioning</li>
            </ul>
          </SideGuide>
        </div>
      </div>
    </div>
  )
}
