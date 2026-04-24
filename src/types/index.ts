export interface Course {
    id: number,
    name: string,
    credits: number,
    grade: string
}

export interface Semester {
    id: number,
    term: string,
    courses: Course[]
}