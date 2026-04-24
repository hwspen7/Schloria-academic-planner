interface SemesterFormProps {
    term: string
    onTermChange: (value: string) => void
    onAddSemester: () => void
}

function SemesterForm({
    term,
    onTermChange,
    onAddSemester
}: SemesterFormProps) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-slate-800">Add Semester</h2>

            <div className="mt-4 flex gap-3">
                <input type="text"
                    value={term}
                    onChange={(e) => onTermChange(e.target.value)}
                    placeholder="Example: Autumn 2025"
                    className="flex-1 rounded-xl border border-slate-300 px-4 py-2"
                />
                <button onClick={onAddSemester} className="rounded-xl bg-slate-800 px-5 py-2 text-white">
                    Add
                </button>
            </div>
        </div>
    )
}

export default SemesterForm