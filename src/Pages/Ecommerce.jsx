import React from 'react';
import { BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {Stacked, Pie, Button,SparkLine,LineChart} from '../Components';
import {earningData,SparklineAreaData,ecomPieChartData,recentTransactions,dropdownData,weeklyStats,medicalproBranding} from '../data/dummy'
import product9 from '../data/product9.jpg'
import { useStateContext } from '../Context/ContextProvider';
const DropDown = ({ currentMode }) => (
  <div className="px-2 py-1 rounded-md w-28 border-1 border-color">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);
const Ecommerce = () => {
 
  const {currentColor,currentMode} = useStateContext();
  return ( 

    <div className="mt-20"> 
   <div className='ml-5'>
    <p className='text-sm text-gray-300 mt-7'>Home</p>
    <h2 className='mb-5 text-lg font-semibold'>Ecommerce</h2>
   </div>
    <div className="flex flex-wrap justify-center lg:flex-nowrap ">
      <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9 ">
        <div className="flex items-center justify-between">
          <div >
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$83,543.98</p>
          </div>
          <button
            type="button"
            style={{ backgroundColor: currentColor }}
            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
          >
            <BsCurrencyDollar />
          </button>
        </div>
          <div className='mt-6'>
            <Button
            color='white'
            bgColor= {currentColor}
            text= 'Download'
            borderRadius = '10px'
            size='md'
            />
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-1 m-3'>
          {earningData.map((item)=>(
            <div key={item.title}
            className='p-4 bg-white dark:text-gray-200 pt-9 dark:bg-secondary-dark-bg md:w-56'>
              <button type="button" 
              style={{color:item.itemColor,background:item.iconBg}}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
                </button>
                <p className ='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='gap-1 mt-2 text-sm text-gray-300'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='p-4 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center text-sm text-gray-500 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center text-sm text-green-500 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-10 mt-10'>
            <div className='pr-10 m-4 border-r-1 border-color'>
              <div>
                <p><span className='text-3xl font-semibold'>$120,890</span>
                <span className='p-2 ml-2 text-xs text-white bg-green-500 rounded-full cursor-pointer hover:drop-shadow-xl'>$40%</span>
                </p>
                <p className='text-grey-500 mt'>Budget</p>
              </div>
              <div className='mt-9'>
                <p><span className='text-3xl font-semibold'>$50,890</span></p>
                <p className='text-grey-500 mt'>Expense</p>
              </div>npm
              <div className='mt-5'>
                <SparkLine 
                currentColor={currentColor}
                id="sparkline"
                type='Line'
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor} />
              </div>
              <div className='mt-10'>
              <Button 
              color="white"
              bgColor= {currentColor}
              text="Download Report"
              borderRadius="10px"
              />
            </div>
            </div>
            <div>
            <Stacked width="320px" height="360px" />
          </div>
          </div>
        </div>
        <div>
          <div
            className="p-4 m-3 rounded-2xl md:w-400"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex items-center justify-between ">
              <p className="text-2xl font-semibold text-white">Earnings</p>

              <div>
                <p className="mt-8 text-2xl font-semibold text-white">$83,543.98</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 p-8 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 m-4">
        <div className="p-6 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="p-4 text-2xl rounded-lg hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="font-semibold text-md">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>
        <div className="p-6 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-96 md:w-760">
          <div className="flex items-center justify-between gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="overflow-auto md:w-full">
            <LineChart />
          </div>
        </div>
      </div>
    
      <div className="flex flex-wrap justify-center">
        <div className="p-6 m-3 bg-white md:w-400 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between w-full mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="p-3 text-2xl text-white rounded-full hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="font-semibold text-md">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

        </div>
        <div className="p-6 m-3 bg-white w-400 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Frontend Space</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            17 OCT, 2022
          </p>

          <div className="flex gap-4 mt-6 border-b-1 border-color">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="pb-2 pr-4 border-r-1 border-color">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="pb-4 mt-2 border-b-1 border-color">
            <p className="mb-2 font-semibold text-md">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="mb-2 font-semibold text-md">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="object-fill w-8 h-8 rounded-full" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-sm text-gray-400">36 Recent Transactions</p>
          </div>
        </div>
        <div className="p-6 m-3 bg-white w-400 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Blog</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="text-lg font-semibold">Logeak Solutions dey for you !!</p>
              <p className="text-gray-400 ">Olayinka Ajayi</p>
              <p className="mt-8 text-sm text-gray-400">
               Logeak solutions:expaning your accessibility,bringing your imagination to life.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ecommerce;