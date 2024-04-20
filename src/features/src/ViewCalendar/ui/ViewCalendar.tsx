import { getUserIdSelector } from '@entities';
import { routerConfig } from '@shared/configs';
import {Calendar, type CalendarProps,Flex, Spinner} from '@shared/ui'
import type { Dayjs } from 'dayjs';
import _ from 'lodash';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';

import { useAllLessonsQuery } from '../api';
import { dayActions } from '../model/slice';

/* eslint-disable-next-line */
export interface MainProps {}


const ViewCalendar = memo((props: MainProps) => {

  const userId = useSelector(getUserIdSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {data: calendarData, isLoading} = useAllLessonsQuery({
    userId: userId || '1',
  }, {skip: !userId})

  const handleSelect = (newValue: Dayjs)=>{
    const date = newValue.format('YYYY-MM-DD')
    const targetLessons = _.filter(calendarData?.lessons,{day:{date}})
    dispatch(dayActions.setCurrentDay({id:'1', date, lessons: targetLessons}))
    const url = routerConfig.RouterPath.day.replace(':date','')
    navigate(url+date)
  }

  const getListData = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD')
    const targetLessons= _.filter(calendarData?.lessons,{day:{date: date}})
    
    return targetLessons;
  }

  const dateCellRender = (value: Dayjs) => {
    const lessonsByDay = getListData(value);
    
  return (
    <ul className="events">
      {lessonsByDay.map((lesson)=>
          (<li key={lesson?.preview}>
            {lesson?.preview}
          </li>)
      )}
    </ul>
);
  };
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return null
    
    return info.originNode;
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