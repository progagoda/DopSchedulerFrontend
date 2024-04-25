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
}[]