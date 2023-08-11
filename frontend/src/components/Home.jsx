import React, { useState } from 'react'
import Payment from './Payment'

function Home({activePlan}) {
  const [userData, setUserData] = useState(null);


    // Enable this to fetch user Data from Api
    // useEffect(() => {
    //     axios.get(``).then((res) => setUserData(res.data))
    // },[])
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {/* <Payment/> */}
      <div className='bg-white p-5 w-1/3 rounded-md'> 
      <div className='flex w-full justify-between  p-2'>
        <div className='flex gap-1 justify-center items-center'>
        <h1>Current Plan Details</h1>
       {activePlan? <span className='bg-[#c2dcfc] text-[#1e4d91] text-xs rounded-md  p-1'>Active</span> : <span className='bg-[#fbeff0] text-[#e88a87] text-xs rounded-md  p-1'>Cancelled</span> }
        </div>
        
        <button className='text-[#1e4d91] font-bold text-sm'>Cancel</button>
  
      </div>

      <h1>Basic</h1>
      <p className='text-sm text-gray-500'>Phone+ Tablet</p>
      <h1 className='text-xl font-bold '>2,000/ Year</h1>
      <button className='bg-white my-3 text-[#1e4d91] border-2 border-[#1e4d91] px-4 py-1 font-semibold rounded-md'>{activePlan ? 'Change Plan' : 'Choose Plan'}</button>
      <div className='bg-[#ecebeb] rounded-md my-2 p-1'>
        <span className='text-xs'>Your subscription has started on <span className='font-bold'>20th July,200</span> and will auto renew on <span className='font-bold'>Jul 20th 2023</span></span>
      </div>
      </div>
    </div>
  )
}

export default Home
