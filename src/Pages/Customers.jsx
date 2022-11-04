import React from 'react'
import { GridComponent,ColumnsDirective, ColumnDirective,Edit,Toolbar,Sort,Filter,Page,Search,Inject} from '@syncfusion/ej2-react-grids';
import { customersData,customersGrid } from '../data/dummy';
import {Header} from '../Components'
const Customers = () => {
  return (
    <div className='p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10 '>
    <Header category='Page' title='Customers' />
    <GridComponent 
    dataSource={customersData}
    toolbar={['Search','Delete']}
    width="auto"
    editSettings={{allowDeleting: true, allowEditing:true}}
    allowPaging
    allowSorting>
     <ColumnsDirective>
     {customersGrid.map((item, index)=>(
       <ColumnDirective key={index} {...item} />
     ))}
     </ColumnsDirective>
     <Inject services={[Search,Page,Toolbar,Edit,Sort,Filter]} />
    </GridComponent>
 </div>
  )
}

export default Customers