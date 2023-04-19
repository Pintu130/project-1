import React, { useState } from 'react'

const UseState = () => {
    const [myNum, setMyNum] = useState(0);
    return (
        <>
            <div className='center-div '>
                <p className=" uppercase text-gray-50 text-center text-6xl mt-10 mb-10">{myNum}</p>
                <div className='flex'>
                    <div className=" flex-row text-center bg-sky-500 hover:bg-sky-700 rounded-full mx-auto w-40 p-3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className=" text-white" onClick={() => setMyNum(myNum + 1)}>INC</p>
                    </div>
                    <div className=" flex-row text-center bg-sky-500 hover:bg-sky-700 rounded-full mx-auto w-40 p-3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className=" text-white" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>DCR</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseState
