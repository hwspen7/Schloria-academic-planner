import React from 'react'

interface SemesterFormProps {
    term: string,
    onTermChange: (value: string) => void,
    onAddSemester: () => void
}

export default function SemesterForm() {
    return (
        <div>
            Semester Form
        </div>
    )
}
