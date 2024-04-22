import { TLesson } from "@entities"

export type TLessonCardSchemeArgs = {
    lessonId: number;
}

export type TLessonListSchemeApi = TLesson[];

export type TLessonListSchemeArgs= {
    date: string
}