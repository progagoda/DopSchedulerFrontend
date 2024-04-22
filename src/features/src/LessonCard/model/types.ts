export type TLessonCardSchemeArgs = {
    lessonId: number;
}

import { TLesson } from "@entities"

export type TLessonListSchemeApi = TLesson[];

export type TLessonListSchemeArgs= {
    date: string
}