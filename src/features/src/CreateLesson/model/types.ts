export type TApiGroup = {
    id: number;
    name: string;
}

export type TGroup = {
    value: number;
    label: string;
}

export type TCheckFreeDateArgs = {
    date: string
    group_ids: number[]
}

export type TApiDisabledStartTime = {
    disableHour: number;
    disabledMinutes: number[];
}

export type TCreateLessonArgs = {
    name: string;
    date: string,
    start_time: string;
    end_time: string;
    location?: string;
    zoom_link?: string;
    group_ids: number[];
}