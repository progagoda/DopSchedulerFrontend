import { getUserIdSelector } from '@entities';
import { routerConfig } from '@shared/configs';
import {Calendar, type CalendarProps,Flex, Spinner} from '@shared/ui'
import type { Dayjs } from 'dayjs';
import _ from 'lodash';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLessonsQuery } from '../api';
import { dayActions } from '../model/slice';

/* eslint-disable-next-line */
export interface MainProps {}


const ViewCalendar = memo((props: MainProps) => {
  const userId = useSelector(getUserIdSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data: lessons, isLoading} = useLessonsQuery({
    userId: userId || '1',
  }, {skip: !userId})

  const transformDate = (date: Dayjs) => `${date.year()}-${date.month()}-${date.date()}`;

  const handleSelect = (newValue: Dayjs)=>{
    const date = _.reverse(_.split(transformDate(newValue),'-')).join('.');
    const targetDate = transformDate(newValue);
    const targetLessons = _.filter(lessons,{day:{date: targetDate}})
    dispatch(dayActions.setCurrentDay({id:'1', date, lessons: targetLessons}))
    navigate(routerConfig.RouterPath.day)
  }

  const getListData = (value: Dayjs) => {
    const date = transformDate(value);
    const targetLessons= _.filter(lessons,{day:{date: date}})
    
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