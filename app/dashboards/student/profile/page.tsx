'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import CustomCursor from '../../../components/cursor/cursor'
import { DashboardHeader } from '../../../components/DashboardHeader';
import { DashboardLayout } from '../../../components/DashboardLayout';

export default function StudentProfile() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      eventsTarget: document.body,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const userName = "Student User"
  const userRole = "student" as const

  return (
    <DashboardLayout userName={userName} userRole={userRole}>
      {/* Custom Cursor */}
      <CustomCursor />
      
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#03045e] mb-2">
              Student Profile
            </h1>
            <p className="text-gray-600">
              Manage your profile information and academic preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-[#03045e] mb-6">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Student User"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="student@laziyaacademy.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade Level
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent">
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  value="STU-2024-001"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  defaultValue="2008-05-15"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Email
                </label>
                <input
                  type="email"
                  defaultValue="parent@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-[#00b4d8] hover:bg-[#03045e] text-white px-6 py-2 rounded-md transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Student Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            {/* Bio Data Card */}
            <div className="bg-[#e3f2fd] rounded-lg shadow p-5 border border-[#b8daff]">
              <h3 className="text-lg font-semibold text-[#182848] mb-3">Bio Data</h3>
              <ul className="text-sm text-[#182848] space-y-2">
                <li><b>Full Name:</b> Student User</li>
                <li><b>Date of Birth:</b> 15 May 2008</li>
                <li><b>Gender:</b> Female</li>
                <li><b>Student ID:</b> STU-2024-001</li>
              </ul>
            </div>
            {/* Financial Details Card */}
            <div className="bg-[#e3f2fd] rounded-lg shadow p-5 border border-[#b8daff]">
              <h3 className="text-lg font-semibold text-[#182848] mb-3">Financial Details</h3>
              <ul className="text-sm text-[#182848] space-y-2">
                <li><b>Balance:</b> $1,200</li>
                <li><b>Last Payment:</b> 01 July 2025</li>
                <li><b>Next Due:</b> 01 September 2025</li>
                <li><b>Status:</b> Active</li>
              </ul>
            </div>
            {/* Academic Details Card */}
            <div className="bg-[#e3f2fd] rounded-lg shadow p-5 border border-[#b8daff]">
              <h3 className="text-lg font-semibold text-[#182848] mb-3">Academic Details</h3>
              <ul className="text-sm text-[#182848] space-y-2">
                <li><b>Grade Level:</b> Grade 10</li>
                <li><b>Subjects:</b> Mathematics, English, Science, History</li>
                <li><b>Overall Grade:</b> A-</li>
                <li><b>Attendance:</b> 98%</li>
              </ul>
            </div>
            {/* Emergency Contact Card */}
            <div className="bg-[#e3f2fd] rounded-lg shadow p-5 border border-[#b8daff]">
              <h3 className="text-lg font-semibold text-[#182848] mb-3">Emergency Contact</h3>
              <ul className="text-sm text-[#182848] space-y-2">
                <li><b>Name:</b> Jane Doe</li>
                <li><b>Relationship:</b> Parent</li>
                <li><b>Phone:</b> +1 555-123-4567</li>
                <li><b>Email:</b> parent@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}
