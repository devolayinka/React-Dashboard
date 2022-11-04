import React from 'react';
import { ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,Inject,DragAndDrop,Resize} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import {Header} from '../Components'

  
const Calendar = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white md:m-10 rounded-3xl'>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent 
      height="580px" 
      eventSettings={{dataSource:scheduleData}}
      selectedDate= {new Date(2021,0,10)}

      >
        <Inject  services = {[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar