import React, { ReactNode } from 'react'
interface InfoCardProps {
  icon: ReactNode
  title: string
  link: string
  content: ReactNode
  titleClassName?: string
  bgColor?: string
}
export function InfoCard({
  icon,
  title,
  link,
  content,
  titleClassName = '',
  bgColor = 'bg-[#D9EDF7]',
}: InfoCardProps) {
  return (
    <div className="block min-h-[90px] bg-white w-full shadow-md mb-[15px] rounded-lg overflow-hidden border border-[#d1e7ff]">
      <a href={link} className="bg-transparent text-[#4b6cb7]">
        <span
          className={`block float-left h-[90px] w-[90px] text-center text-[45px] leading-[90px] ${bgColor} rounded-l-lg`}
        >
          {icon}
        </span>
      </a>
      <div className="ml-[90px] p-[10px_12px]">
        <span className={`font-bold text-[#2c3e50] ${titleClassName}`}>
          {title}
          <br />
        </span>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  )
}
