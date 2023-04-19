import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
};
const UseReducer = () => {
    // const [myNum, setMyNum] = useState(0);

    const inData = 10;
    const [state, dispatch] = useReducer(reducer, inData);

    return (
        <>
            <div className='center-div '>
                <p className=" uppercase text-gray-50 text-center text-6xl mt-10 mb-10">{state}</p>
                <div className='flex'>
                    <div className=" flex-row text-center bg-sky-500 hover:bg-sky-700 rounded-full mx-auto w-40 p-3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className=" text-white" onClick={() => dispatch({ type: 'INCR' })}>INCR</p>
                    </div>
                    <div className=" flex-row text-center bg-sky-500 hover:bg-sky-700 rounded-full mx-auto w-40 p-3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p className=" text-white" onClick={() => dispatch({ type: 'DECR' })}>DECR</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseReducer
