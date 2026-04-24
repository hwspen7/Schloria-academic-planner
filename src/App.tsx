import React from 'react'
import CourseForm from './components/CourseForm'
import SemesterForm from './components/SemesterForm'
import SemesterTable from './components/SemesterTable'
import ReportSummary from './components/ReportSummary'



export default function App() {
  return (
    <div className='app bg-slate-400 p-10'>
      <h1>Schloria</h1>
      <SemesterForm></SemesterForm>
      <SemesterTable></SemesterTable>
      <ReportSummary></ReportSummary>
    </div>
  )
}
