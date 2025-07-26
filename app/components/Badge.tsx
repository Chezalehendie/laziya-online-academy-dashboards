import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'light' | 'solid'
  color?: 'primary' | 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ 
  children, 
  variant = 'light', 
  color = 'primary', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1 rounded-full font-medium'
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm'
  }
  
  const colorClasses = {
    light: {
      primary: 'bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400',
      success: 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500',
      error: 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500',
      warning: 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500',
      info: 'bg-info-50 text-info-600 dark:bg-info-500/15 dark:text-info-500'
    },
    solid: {
      primary: 'bg-brand-500 text-white',
      success: 'bg-success-500 text-white',
      error: 'bg-error-500 text-white',
      warning: 'bg-warning-500 text-white',
      info: 'bg-info-500 text-white'
    }
  }
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${colorClasses[variant][color]} ${className}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}
