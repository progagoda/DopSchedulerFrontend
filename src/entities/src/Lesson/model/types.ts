export type TLesson = {
    id: number;
    name: string;
    user_id: number;
    date: string,
    start_time: string;
    end_time: string;
    location?: string;
    zoom_link?: string;
    group_name: string;
    group_id: number;
}