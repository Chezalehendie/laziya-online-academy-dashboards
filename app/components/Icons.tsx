import React from 'react'

export function GroupIcon({ className = 'w-6 h-6', color = '#465fff' }: { className?: string, color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 7.16C18 10.67 16.17 12.5 12.66 12.5H11.34C7.83 12.5 6 10.67 6 7.16C6 5.36 6.82 3.89 8.13 2.89C8.93 2.24 9.93 1.88 11.01 1.88H12.99C14.07 1.88 15.07 2.24 15.87 2.89C17.18 3.89 18 5.36 18 7.16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5C14.07 12.5 15.9 12.79 17.21 13.56C18.47 14.31 18.47 15.51 17.21 16.26C15.9 17.03 14.07 17.32 12 17.32C9.93 17.32 8.1 17.03 6.79 16.26C5.53 15.51 5.53 14.31 6.79 13.56C8.1 12.79 9.93 12.5 12 12.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BookIcon({ className = 'w-6 h-6', color = '#3641f5' }: { className?: string, color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 4.67C22 3.47 21.02 2.58 19.83 2.68L15.49 3.12C14.33 3.21 12.68 3.84 11.85 4.49L11.48 4.73C11.24 4.88 10.76 4.88 10.52 4.73L10.15 4.49C9.32 3.84 7.67 3.21 6.51 3.12L2.17 2.68C0.98 2.58 0 3.47 0 4.67V17.77C0 18.79 0.78 19.96 1.8 20.12L6.51 20.84C7.6 21.01 9.4 21.7 10.52 22.35L10.78 22.5C11.24 22.76 11.76 22.76 12.22 22.5L12.48 22.35C13.6 21.7 15.4 21.01 16.49 20.84L21.2 20.12C22.22 19.96 23 18.79 23 17.77V4.67H22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.49V21.99"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 8.49H5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.49H5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TeacherIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.67 14H4C2.9 14 2 14.9 2 16V22H6.67C7.6 22 8.67 21.23 8.67 20V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.33 14H10.67C9.64 14 8.67 14.77 8.67 16V20C8.67 21.23 9.64 22 10.67 22H13.33C14.36 22 15.33 21.23 15.33 20V16C15.33 14.77 14.36 14 13.33 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14H15.33C15.33 14.77 15.33 15.23 15.33 16V20C15.33 21.23 16.3 22 17.33 22H22V16C22 14.9 21.1 14 20 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 10.5C5.33 10.5 6 9.83 6 9C6 8.17 5.33 7.5 4.5 7.5C3.67 7.5 3 8.17 3 9C3 9.83 3.67 10.5 4.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 10.5C20.33 10.5 21 9.83 21 9C21 8.17 20.33 7.5 19.5 7.5C18.67 7.5 18 8.17 18 9C18 9.83 18.67 10.5 19.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DollarIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 5H9.5C8.57 5 7.785 5.315 7.235 5.865C6.685 6.415 6.5 7.2 6.5 8.135C6.5 9.07 6.815 9.855 7.365 10.405C7.915 10.955 8.7 11.27 9.635 11.27H14.365C15.3 11.27 16.085 11.585 16.635 12.135C17.185 12.685 17.5 13.47 17.5 14.405C17.5 15.34 17.185 16.125 16.635 16.675C16.085 17.225 15.3 17.54 14.365 17.54H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
