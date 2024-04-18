export type TLesson = {
    id: number;
    preview: string;
    day: {
        date: string;
        startTime: string;
        endTime: string;
    }
    info: {
        subject: string;
        group: string;
    } 
    place:{
        location?: string;
        zoomLink?: string;
    }
}