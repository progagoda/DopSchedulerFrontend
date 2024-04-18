import type {TDay,TLesson} from '@entities'

export type TCalendarSchemeApi = {
   id: string;
   lessons: TLesson[];
}

export type TCalendarSchemeArgs = {
   userId: string;
}

export type TDayScheme = Partial<TDay>