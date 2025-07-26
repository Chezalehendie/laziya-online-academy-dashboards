'use client'

import React, { useEffect } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'
import { StatCard } from '../../components/StatCard'
import { ChartCard } from '../../components/ChartCard'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../../components/Table'
import { Badge } from '../../components/Badge'
import { BookIcon, GroupIcon, Home, Info } from 'lucide-react'
import { InfoCard } from '../../components/InfoCard'
import Lenis from 'lenis'
import {
  GraduationCapIcon,
  BookOpenIcon,
  CalendarIcon,
  UsersIcon,
} from 'lucide-react'
import CustomCursor from '../../components/cursor/cursor'

const upcomingAssignments = [
  { id: 1, subject: 'Mathematics', assignment: 'Calculus Problem Set', dueDate: '2024-01-15', status: 'pending' },
  { id: 2, subject: 'Physics', assignment: 'Lab Report', dueDate: '2024-01-18', status: 'in-progress' },
  { id: 3, subject: 'Chemistry', assignment: 'Research Paper', dueDate: '2024-01-22', status: 'pending' },
  { id: 4, subject: 'Biology', assignment: 'Cell Structure Quiz', dueDate: '2024-01-25', status: 'completed' }
]

const recentGrades = [
  { id: 1, subject: 'English', assignment: 'Essay Analysis', grade: 92, submittedDate: '2024-01-08' },
  { id: 2, subject: 'History', assignment: 'Timeline Project', grade: 88, submittedDate: '2024-01-05' },
  { id: 3, subject: 'Science', assignment: 'Lab Experiment', grade: 95, submittedDate: '2024-01-03' },
  { id: 4, subject: 'Math', assignment: 'Algebra Test', grade: 85, submittedDate: '2024-01-01' }
]

export default function StudentDashboard() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
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
      <CustomCursor />
      <section
        id="mycontent"
        className="w-full min-h-[250px] p-[15px] bg-[#f0f8ff] text-[#333333] text-[14px] leading-[20px] font-['Source_Sans_Pro','Helvetica_Neue',Helvetica,Arial,sans-serif]"
      >
        {/* Navigation */}
        {/* <ol className="mb-5 list-none bg-[#4b6cb7] rounded p-2">
          <li className="inline-block text-white">
            <Home className="inline-block w-[14px] h-[14px] mr-1" />
            HOME
          </li>
        </ol> */}
        {/* Main Content */}
        <div className="mb-5 bg-white shadow-md border border-[#d1e7ff] rounded-lg">
          {/* Welcome Message */}
          <div className="p-[15px] bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white rounded-t-lg">
            <div className="mx-[-15px]">
              <div id="load" className="relative min-h-[1px] px-[15px] float-left w-full">
                <div className="mx-[-15px]">
                  <div className="mx-[-15px]">
                    <div className="relative min-h-[1px] px-[15px] float-left w-full">
                      <div className="relative min-h-[1px] px-[15px] float-left w-full border border-transparent mt-4">
                        <h2 className="text-2xl font-bold mb-2 text-[#182848]">
                          Welcome to Laziya Online Academy Student Portal!
                        </h2>
                        <p className="text-[#182848]">
                          This is your one-stop place for all your school information and activities. Here you can check your grades, see your subjects, and stay updated with school announcements. If you need help, please talk to your teacher or email us at <b>help@laziya-academy.edu</b>.
                          <span className="text-yellow-300 font-bold">Remember to log out when you're finished!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Notice Board Header */}
          {/* <div className="rounded-t-[3px] text-[#2c3e50] bg-[#d1e7ff] border-t border-r border-l border-[#b8daff] border-b border-[#b8daff] p-[10px_15px]">
            <Info className="inline-block w-[14px] h-[14px] mr-1 text-center" />
            My Dashboard
          </div> */}
        </div>
      </section>
      <div className="flex flex-row flex-nowrap gap-6 mb-6 justify-start items-stretch overflow-x-auto">
        <InfoCard
          icon={<GraduationCapIcon size={45} className="text-[#4b6cb7]" />}
          title="TERM 2 RESULTS"
          link="#"
          content={
            <div className="text-sm">
              Mathematics: <b>A</b>
              <br />
              English: <b>B+</b>
              <br />
              Science: <b>A-</b>
              <br />
              Overall Grade: <b>A-</b>
            </div>
          }
          titleClassName="text-base uppercase whitespace-nowrap overflow-hidden text-ellipsis"
          bgColor="bg-[#e3f2fd]"
        />
        <InfoCard
          icon={<BookOpenIcon size={45} className="text-[#4b6cb7]" />}
          title="MY SUBJECTS"
          link="#"
          content={
            <div className="text-sm">
              Core Subjects: <b>5</b>
              <br />
              Electives: <b>2</b>
              <br />
              Assignments Due: <b>3</b>
            </div>
          }
          titleClassName="text-base uppercase whitespace-nowrap overflow-hidden text-ellipsis"
          bgColor="bg-[#e3f2fd]"
        />
          <InfoCard
                icon={<CalendarIcon size={45} className="text-[#4b6cb7]" />}
                title="UPCOMING EVENTS"
                link="#"
                content={
                  <div className="text-sm">
                    <b>Science Fair: May 15</b>
                    <br />
                    <b>Mid-Term Break: June 1-5</b>
                    <br />
                    <span>
                      <a href="#calendar" className="text-[#4b6cb7]">
                        View Full Calendar
                      </a>
                    </span>
                  </div>
                }
                bgColor="bg-[#e3f2fd]"
              />
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {/* Upcoming Assignments */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-lg border border-[var(--brand-200)] bg-[var(--brand-50)] px-5 pb-2.5 pt-6 shadow-lg sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-[var(--brand-900)]">
              Upcoming Assignments
            </h4>
            <Table>
              <TableHeader>
                <tr>
                  <th className="min-w-[220px] px-4 py-4 font-medium text-[var(--brand-900)] xl:pl-11">Subject</th>
                  <th className="min-w-[150px] px-4 py-4 font-medium text-[var(--brand-900)]">Assignment</th>
                  <th className="min-w-[120px] px-4 py-4 font-medium text-[var(--brand-900)]">Due Date</th>
                  <th className="px-4 py-4 font-medium text-[var(--brand-900)]">Status</th>
                </tr>
              </TableHeader>
              <TableBody>
                {upcomingAssignments.map((assignment) => (
                  <TableRow key={assignment.id} className="hover:bg-[var(--brand-100)] transition-colors">
                    <TableCell className="border-b border-[var(--brand-200)] px-4 py-5 pl-9 xl:pl-11">
                      <h5 className="font-medium text-[var(--brand-900)]">
                        {assignment.subject}
                      </h5>
                    </TableCell>
                    <TableCell className="border-b border-[var(--brand-200)] px-4 py-5">
                      <p className="text-[var(--brand-900)]">
                        {assignment.assignment}
                      </p>
                    </TableCell>
                    <TableCell className="border-b border-[var(--brand-200)] px-4 py-5">
                      <p className="text-[var(--brand-900)]">
                        {assignment.dueDate}
                      </p>
                    </TableCell>
                    <TableCell className="border-b border-[var(--brand-200)] px-4 py-5">
                      <Badge 
                        variant={assignment.status === 'completed' ? 'solid' : 'light'}
                        color={assignment.status === 'completed' ? 'success' : assignment.status === 'in-progress' ? 'warning' : 'error'}
                        className={assignment.status === 'completed' ? 'bg-[var(--brand-500)] text-white' : 'bg-[var(--brand-100)] text-[var(--brand-900)]'}
                      >
                        {assignment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* Recent Grades */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-lg border border-[var(--brand-200)] bg-[var(--brand-50)] px-5 pb-6 pt-6 shadow-lg">
            <h4 className="mb-6 text-xl font-semibold text-[var(--brand-900)]">
              Recent Grades
            </h4>
            <div className="space-y-4">
              {recentGrades.slice(0, 4).map((grade) => (
                <div
                  key={grade.id}
                  className="flex items-center justify-between rounded-lg border border-[var(--brand-200)] bg-[var(--brand-50)] p-4"
                >
                  <div>
                    <h5 className="font-medium text-[var(--brand-900)]">
                      {grade.subject}
                    </h5>
                    <p className="text-sm text-[var(--brand-800)]">
                      {grade.assignment}
                    </p>
                    <p className="text-xs text-[var(--brand-700)]">
                      Submitted: {grade.submittedDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${
                      grade.grade >= 90 ? 'text-[var(--brand-500)]' :
                      grade.grade >= 80 ? 'text-[var(--brand-700)]' :
                      'text-[var(--brand-900)]'
                    }`}>
                      {grade.grade}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Performance Chart */}
        <div className="col-span-12 xl:col-span-8">
          <ChartCard
            title="Academic Performance Trend"
            subtitle="Your grades over the past semester"
            className="bg-[var(--brand-50)] border-[var(--brand-200)] text-[var(--brand-900)] shadow-lg"
          >
            <div className="h-80 flex items-center justify-center bg-[var(--brand-100)] rounded-lg">
              <p className="text-[var(--brand-700)]">Performance Chart Placeholder</p>
            </div>
          </ChartCard>
        </div>
        {/* Study Schedule */}
        <div className="col-span-12 xl:col-span-4">
          <div className="rounded-lg border border-[var(--brand-200)] bg-[var(--brand-50)] px-5 pb-6 pt-6 shadow-lg">
            <h4 className="mb-6 text-xl font-semibold text-[var(--brand-900)]">
              Today's Schedule
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rounded-lg border-l-4 border-[var(--brand-500)] bg-[var(--brand-100)] p-3">
                <div className="flex-1">
                  <h5 className="font-medium text-[var(--brand-900)]">Mathematics</h5>
                  <p className="text-sm text-[var(--brand-800)]">9:00 AM - 10:30 AM</p>
                  <p className="text-xs text-[var(--brand-700)]">Advanced Calculus</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border-l-4 border-[var(--brand-700)] bg-[var(--brand-100)] p-3">
                <div className="flex-1">
                  <h5 className="font-medium text-[var(--brand-900)]">Physics</h5>
                  <p className="text-sm text-[var(--brand-800)]">11:00 AM - 12:30 PM</p>
                  <p className="text-xs text-[var(--brand-700)]">Quantum Mechanics</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border-l-4 border-[var(--brand-900)] bg-[var(--brand-100)] p-3">
                <div className="flex-1">
                  <h5 className="font-medium text-[var(--brand-900)]">Chemistry</h5>
                  <p className="text-sm text-[var(--brand-800)]">2:00 PM - 3:30 PM</p>
                  <p className="text-xs text-[var(--brand-700)]">Organic Chemistry Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
