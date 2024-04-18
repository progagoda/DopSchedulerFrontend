import {ViewCalendarAsync} from '@features'
import { Spinner } from '@shared/ui';
import { Suspense } from 'react';
/* eslint-disable-next-line */
export interface MainProps {}


export function Schedule(props: MainProps) {

return (
  <Suspense fallback={<Spinner/>}>
    <ViewCalendarAsync />
  </Suspense>
);
}

export default Schedule;
