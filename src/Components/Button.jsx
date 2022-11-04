import React from 'react'
import { useStateContext } from '../Context/ContextProvider';
const Button = ({icon,color, bgColor, size,text,borderRadius}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button type='button'
    style={{backgroundColor:bgColor,color,borderRadius}}
    onClick = {()=>setIsClicked(initialState)}
    className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {icon}
    {text}</button>
  )
}

export default Button

// import React from 'react';

// 

// const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
//   const { setIsClicked, initialState } = useStateContext();

//   return (
//     <button
//       type="button"
//       onClick={() => setIsClicked(initialState)}
//       style={{ backgroundColor: bgColor, color, borderRadius }}
//       className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
//     >
//       {icon} {text}
//     </button>
//   );
// };

// export default Button;