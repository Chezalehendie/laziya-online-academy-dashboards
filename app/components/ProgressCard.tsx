import React from 'react'
interface ProgressCardProps {
  title: string
  progress: number
  subtitle?: string
  bgColor?: string
  progressColor?: string
}
export function ProgressCard({
  title,
  progress,
  subtitle,
  bgColor = 'bg-white',
  progressColor = 'bg-[#00b4d8]',
}: ProgressCardProps) {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-6`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-[#03045e]">{title}</h3>
        <span className="text-sm font-bold text-[#00b4d8]">{progress}%</span>
      </div>
      {subtitle && <p className="text-sm text-gray-500 mb-3">{subtitle}</p>}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${progressColor}`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  )
}
