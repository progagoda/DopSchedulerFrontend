import {Calendar, Modal, Typography} from '@shared/ui'
import { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface MainProps {}


export function Schedule(props: MainProps) {
  const [isOpen, setOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(() => dayjs('2017-01-25'));

  const handleSelect = (newValue: Dayjs)=>{
    setCurrentDay(newValue);
    setOpen(true);
  }
  const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event......' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    
return listData || [];
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    
return (
  <ul className="events">
    {listData.map((item) => (
      <li key={item.content}>
        {item.content}
      </li>
        ))}
  </ul>
);
  };
  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return null
    
return info.originNode;
  };


return (
  <>
    <Calendar 
    cellRender={cellRender}
    onSelect={handleSelect}
    />
    
    <Modal 
    closable
    onCancel={()=>setOpen(false)}
    open={isOpen}>
      {currentDay.toString()}
    </Modal>
  </>
);
}

export default Schedule;
