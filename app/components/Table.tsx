import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

interface TableHeaderProps {
  children: React.ReactNode
  className?: string
}

interface TableBodyProps {
  children: React.ReactNode
  className?: string
}

interface TableRowProps {
  children: React.ReactNode
  className?: string
}

interface TableCellProps {
  children: React.ReactNode
  className?: string
  isHeader?: boolean
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className={`w-full min-w-[600px] ${className}`}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className = '' }: TableHeaderProps) {
  return (
    <thead className={`border-gray-100 dark:border-gray-800 border-y ${className}`}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className = '' }: TableBodyProps) {
  return (
    <tbody className={`divide-y divide-gray-100 dark:divide-gray-800 ${className}`}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className = '' }: TableRowProps) {
  return (
    <tr className={className}>
      {children}
    </tr>
  )
}

export function TableCell({ children, className = '', isHeader = false }: TableCellProps) {
  const baseClasses = isHeader 
    ? "py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400"
    : "py-3 text-gray-500 text-sm dark:text-gray-400"
  
  return (
    <td className={`${baseClasses} ${className}`}>
      {children}
    </td>
  )
}
