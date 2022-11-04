import React from 'react'
import { GridComponent,ColumnsDirective, ColumnDirective,Page,Search,Inject,Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import {Header} from '../Components'
const employees = () => {
  return (
    <div className='p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10 '>
    <Header category='Page' title='Employee Details' />
    <GridComponent 
    dataSource={employeesData}
    toolbar={['Search']}
    width="auto"
    allowPaging>
     <ColumnsDirective>
     {employeesGrid.map((item, index)=>(
       <ColumnDirective key={index} {...item} />
     ))}
     </ColumnsDirective>
     <Inject services={[Search,Page,Toolbar]} />
    </GridComponent>
 </div>
  )
}

export default employees