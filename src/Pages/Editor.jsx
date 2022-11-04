import React from 'react';
import {Header} from '../Components';
import { HtmlEditor,Image,Inject,Toolbar,RichTextEditorComponent,QuickToolbar,Link} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
const Editor = () => {
  return (
    <div className='p-2 m-5 mt-24 bg-white md:m-10 rounded-3xl'>
      <Header category="App" title="Editor" />
      <div className='flex items-center justify-center px-5 tracking-wide text-1xl'>
        <RichTextEditorComponent
      width="980px"
      >
        <EditorData />
        <Inject services ={[Toolbar,QuickToolbar,Link,HtmlEditor,Image]} />
      </RichTextEditorComponent>
      </div>
      
     
    </div>
  )
}

export default Editor