import { Info } from "lucide-react"

export default function SideGuide({ title, children }) {
  return (
    <div className="bg-[#1E90FF]/10 border-l-4 border-[#1E90FF] p-4 rounded-r-md mb-4">
      <div className="flex items-start">
        <div className="text-[#1E90FF] mr-3 mt-0.5">
          <Info size={20} />
        </div>
        <div>
          {title && <h4 className="font-medium text-[#001f3f] mb-1">{title}</h4>}
          <div className="text-sm text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  )
}
