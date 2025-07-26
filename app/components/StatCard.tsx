import React from 'react'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
}

export function StatCard({ title, value, icon, trend, className = '' }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
        <div className="text-gray-800 dark:text-white/90">
          {icon}
        </div>
      </div>

      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
            {value}
          </h4>
        </div>
        {trend && (
          <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
            trend.isPositive 
              ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500' 
              : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500'
          }`}>
            <svg
              className={`w-3 h-3 ${trend.isPositive ? 'rotate-0' : 'rotate-180'}`}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L6 5L9 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {trend.value}
          </div>
        )}
      </div>
    </div>
  )
}
