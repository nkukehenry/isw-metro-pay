"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Button from "../ui/button"
import { CheckCircle, XCircle, Home } from "lucide-react"

export default function Status({ status, onReset }) {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onReset()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onReset])

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 py-8">
      {status === "success" ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-green-500"
        >
          <CheckCircle size={100} strokeWidth={1.5} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-red-500"
        >
          <XCircle size={100} strokeWidth={1.5} />
        </motion.div>
      )}

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">{status === "success" ? "Payment Successful!" : "Payment Failed"}</h2>
        <p className="text-gray-600">
          {status === "success"
            ? "Your payment has been processed successfully. A receipt has been sent to your email."
            : "We couldn't process your payment. Please try again or use a different payment method."}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Button variant="primary" onClick={onReset} className="flex items-center gap-2">
          <Home size={18} />
          Back to Home
        </Button>
        <p className="text-sm text-gray-500">Returning to home in {countdown} seconds...</p>
      </div>
    </div>
  )
}
