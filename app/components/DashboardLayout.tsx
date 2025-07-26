'use client';

import React, { ReactNode, useState, createContext, useContext } from 'react'
import { DashboardSidebar } from './DashboardSideBar'
import { DashboardHeader } from './DashboardHeader'

interface DashboardLayoutProps {
  children: ReactNode
  userRole: 'admin' | 'teacher' | 'student' | 'parent'
  userName: string
}

interface SidebarContextType {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsHovered: (hovered: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
};

export function DashboardLayout({
  children,
  userRole,
  userName,
}: DashboardLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const sidebarContextValue: SidebarContextType = {
    isExpanded,
    isMobileOpen,
    isHovered,
    toggleSidebar,
    toggleMobileSidebar,
    setIsHovered,
  };

  return (
    <SidebarContext.Provider value={sidebarContextValue}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <DashboardSidebar userRole={userRole} />
        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isExpanded || isHovered ? "lg:ml-0" : "lg:ml-0"
          }`}
        >
          {/* Header */}
          <DashboardHeader userName={userName} userRole={userRole} />
          {/* Page Content */}
          <main className="p-4 mx-auto max-w-7xl md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
