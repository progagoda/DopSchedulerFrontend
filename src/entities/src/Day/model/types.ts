import { TLesson } from "../../Lesson";

export type TDay = {
  id: string;
  date: string;
  lessons?: TLesson[];
}