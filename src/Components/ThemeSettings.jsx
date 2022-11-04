import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../Context/ContextProvider';
const ThemeSettings = () => {
  const {setColor,setMode,currentMode,currentColor,setThemeSettings} = useStateContext();
  return (
    <div className='fixed top-0 right-0 w-screen bg-half-transparent nav-item'>
      <div className="float-right h-screen bg-white dark:text-black dark:[#484b52] w-400 overflow-hidden">
        <div className='flex items-center justify-between p-4 ml-4'>
          <p className='text-xl font-semibold'>Settings</p>
          <button type="button"
          onClick ={()=>{setThemeSettings(false)}}
          style={{color:'rgb(153,171,180)',borderRadius:'50%'}}
          className="text-2xl hover:drop-shadow-xl hover:bg-light-gray">
           <MdOutlineCancel /> 
           </button>
        </div>
        <div className='flex-col p-4 ml-4 border-color border-t-1 md:p-10'>
        <p className='text-lg font-semibold capitalize'>theme options</p>
        <div className='mt-4'>
          <input type="radio" 
          id="light"
          value="Light"
          name="theme"
          checked={currentMode === 'Light' }
          onChange={setMode}
          className="cursor-pointer"
          />
          <label htmlFor='light'
          className='ml-2 text-base cursor-pointer'
          >Light</label>
        </div>
        <div className='mt-4'>
          <input type="radio" 
          id="dark"
          value="Dark"
          name="theme"
          checked={currentMode === 'Dark'}
          onChange={setMode}
          className="cursor-pointer"
          />
          <label htmlFor='dark'
          className='ml-2 text-base cursor-pointer'
          >Dark</label>
        </div>
        </div>
        <div className='flex-col p-4 ml-4 border-color border-t-1'>
        <p className='text-lg font-semibold capitalize'>theme colors</p>
        <div className="flex flex-wrap gap-3 mt-3">
          {themeColors.map((item, index)=>(
            <TooltipComponent key={index}content={item.name}position='TopCenter'>
              <div className='relative flex items-center gap-5 mt-2 rounded-full cursor-pointer'>
                <button type="button"
                className='w-10 h-10 rounded-full cursor-pointer'
                style={{backgroundColor:item.color}}
                onClick={()=>setColor(item.color)}>
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' :'hidden'}`}
                  />
                </button>
              </div>
            </TooltipComponent>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings