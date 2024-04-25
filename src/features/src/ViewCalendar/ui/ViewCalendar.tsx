import { routerConfig } from '@shared/configs';
import {Calendar, type CalendarProps,Flex, Spinner} from '@shared/ui'
import type { Dayjs } from 'dayjs';
import { memo } from 'react';
import { useNavigate, } from 'react-router-dom';

import { useAllLessonsQuery } from '../api';

/* eslint-disable-next-line */
export interface MainProps {}


const ViewCalendar = memo((props: MainProps) => {
  const navigate = useNavigate();

  const {data: calendarData, isLoading} = useAllLessonsQuery();

  const handleSelect = (newValue: Dayjs, info: { source: 'year' | 'month' | 'date' | 'customize' })=>{
    if(info.source==='date'){
      const date = newValue.format('YYYY-MM-DD')
      const url = routerConfig.RouterPath.day.replace(':date','')
      navigate(url+date)
    }
  }

  const getListData = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD')
    if(calendarData){
      const targetLessons=  calendarData.filter(lesson=> lesson.date === date)
        
      return targetLessons;
    }
    
    return null;
  }

  const dateCellRender = (value: Dayjs) => {
    const lessonsByDay = getListData(value);
    
  return (
    <ul className="events">
      {lessonsByDay && lessonsByDay.map((lesson)=>
          (<li key={lesson.id}>
            {lesson?.name}
          </li>)
      )}
    </ul>
);
  };
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
  };

  if (isLoading){
    return (
      <Flex style={{height:"92vh"}} align='center' justify='center'>
        <Spinner size='large'/>
      </Flex>
    )
  }

return (
  <Calendar 
    cellRender={cellRender}
    onSelect={handleSelect}
    />
  );
})

export default ViewCalendar