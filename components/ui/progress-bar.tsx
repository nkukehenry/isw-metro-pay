interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="relative w-full">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#1E90FF] h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Step indicators positioned along the progress line */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => {
          const isCompleted = i + 1 <= currentStep
          const isCurrent = i + 1 === currentStep
          
          return (
            <div
              key={i}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                isCompleted
                  ? "bg-[#1E90FF] text-white shadow-lg"
                  : "bg-white border-2 border-gray-300 text-gray-400"
              } ${
                isCurrent ? "ring-2 ring-[#1E90FF] ring-offset-2" : ""
              }`}
            >
              {i + 1}
              {isCompleted && !isCurrent && (
                <div className="absolute -right-1 -bottom-1 bg-white rounded-full p-1">
                  <div className="w-2 h-2 bg-[#1E90FF] rounded-full"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
