'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from './DashboardLayout'
import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  BarChart3Icon,
  MessageSquareIcon,
  SettingsIcon,
  FileTextIcon,
  BellIcon,
  CreditCardIcon,
  UserIcon,
  GraduationCapIcon,
  ClipboardListIcon,
  ChevronDownIcon,
} from 'lucide-react'

interface DashboardSidebarProps {
  userRole: 'admin' | 'teacher' | 'student' | 'parent'
}

interface NavItem {
  name: string
  icon: React.ReactNode
  path?: string
}

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar()
  const pathname = usePathname()

  const isActive = (path?: string) => path === pathname

  // Sidebar menu items for Laziya Online Academy
  const sidebarMenuItems = [
    { name: 'Profile', icon: <UserIcon size={20} />, path: '/dashboards/student/profile' },
    { name: 'Policies & Documents', icon: <FileTextIcon size={20} />, path: '/dashboards/student/policies' },
    { name: 'Registration', icon: <ClipboardListIcon size={20} />, path: '/dashboards/student/registration' },
    { name: 'My Subjects', icon: <BookOpenIcon size={20} />, path: '/dashboards/student/subjects' },
    { name: 'Assessment', icon: <BarChart3Icon size={20} />, path: '/dashboards/student/assessment' },
    { name: 'Exam Results', icon: <GraduationCapIcon size={20} />, path: '/dashboards/student/exam-results' },
    { name: 'Balance', icon: <CreditCardIcon size={20} />, path: '/dashboards/student/balance' },
    { name: 'E-Resources', icon: <BookOpenIcon size={20} />, path: '/dashboards/student/e-resources' },
    { name: 'Timetables', icon: <CalendarIcon size={20} />, path: '/dashboards/student/timetables' },
    { name: 'Tutorship', icon: <UsersIcon size={20} />, path: '/dashboards/student/tutorship' },
  ]

  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-1">
      {items.filter(nav => nav.path).map((nav, index) => (
        <li key={nav.name}>
          <Link
            href={nav.path!}
            className={`menu-item group ${
              isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'
            } flex items-center justify-start`}
          >
            <span
              className={`${
                isActive(nav.path)
                  ? 'menu-item-icon-active'
                  : 'menu-item-icon-inactive'
              }`}
            >
              {nav.icon}
            </span>
            {(isExpanded) && (
              <span className="text-sm ml-3 transition-opacity duration-300 opacity-100">{nav.name}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className="flex"
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Compact Sidebar */}
      <div
        className={`flex h-screen flex-col justify-between border-e border-gray-100 bg-white transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'w-[290px]' : 'w-16'
        }`}
      >
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">L</span>
          </div>
          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <a href="/" className="group relative flex justify-center rounded-sm bg-blue-50 px-2 py-1.5 text-blue-700">
                  <HomeIcon className="size-5 opacity-75" />
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Home</span>
                </a>
              </div>
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                {sidebarMenuItems.filter(item => item.path).map((item) => (
                  <li key={item.name}>
                    <a href={item.path!} className="group relative flex items-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      {item.icon}
                      {(isExpanded || isHovered) && (
                        <span className="ml-3 text-sm font-medium text-gray-700">{item.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <a href="/logout" className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            <BellIcon className="size-5 opacity-75" />
            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Logout</span>
          </a>
        </div>
      </div>
      {/* Expanded dashboard content */}
      <div className="flex-1">
        {/* Children/content should be rendered by DashboardLayout, not here */}
      </div>
    </div>
  )
}
