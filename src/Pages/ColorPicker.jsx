import React from 'react';
import {Header} from '../Components'; 
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const ColorPicker = () => {
  const change = (pencil) => {
    const previews = document.getElementById('preview')
   previews.style.backgroundColor = pencil.currentValue.hex;
  }
  return (
    <div className='p-2 m-5 mt-24 bg-white md:m-10 rounded-3xl'>
    <Header category="App" title="Color Pallete" />
    <div className='text-center'>
      <div id="preview" />
        <div className='flex flex-wrap items-center justify-center gap-20 '>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Pallette</p>
            <ColorPickerComponent 
            id="inline-pallete"
            mode='Palette'
            modeSwitcher={true}
            inline
            showButtons={false}
            change ={change}  
            />
          </div>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'>Inline Picker</p>
            <ColorPickerComponent 
            id="inline-pallete"
            mode='Picker'
            modeSwitcher={false}
            inline
            showButtons={false}
            change ={change}
            />
          </div>
        </div>
      
    </div>
    
  
  </div>
  )
}

export default ColorPicker