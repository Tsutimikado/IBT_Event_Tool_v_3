import React, { useContext } from 'react'
import { WorkContext } from '../../context'

const BigBtn = () => {

    const{isWorking, setIsWorking} = useContext(WorkContext)
    const btnClick = ()=> {
        setIsWorking(!isWorking);
        
    }

    if(isWorking)
        return (
            <button 
                onClick={btnClick}
                className='
                overflow-hidden
                flex justify-center items-center
                ring-4 ring-emerald-300 border-2 border-white text-white 
                font-extrabold text-xl rounded-2xl 
                w-60 h-28 my-5 mx-auto relative'>
                    <div className="
                        bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-300
                        w-[300px] h-[200px]
                        rounded-full
                        animate-[spin_5s_linear_infinite]
                        ">
                            </div>
                            <div className="
                                bg-transparent absolute inset-0 pt-10
                                animate-[pulse_3s_linear_infinite]">ЗА РАБОТОЙ</div>
                            <div className="
                                bg-gray-300/25 absolute top-6 left-[90px]
                                w-16 h-16 rounded-full
                                animate-[ping_1.9s_linear_infinite]
                                "></div>
                            <div className="
                                bg-gray-300/25 absolute top-6 left-[90px]
                                w-24 h-24 rounded-full
                                animate-[ping_1.5s_linear_infinite]
                                "></div>
                            <div className="
                                bg-gray-300/25 absolute top-3 left-[40px]
                                w-24 h-24 rounded-full
                                animate-[ping_2.1s_linear_infinite]
                                "></div>
                </button>)
    else return(
        <button 
                onClick={btnClick}
                className='bg-gradient-to-r from-amber-400 to-amber-300 
                hover:from-amber-400 hover:via-amber-300 hover:to-amber-400 hover:shadow-lg hover:shadow-amber-300
                ring-4 ring-amber-300 border-2 border-white text-white 
                font-extrabold text-xl rounded-2xl 
                py-6 px-8 w-60 h-28 my-5 mx-auto'>
                    ОТСУТСВУЕТ
                </button>
    )
}

export default BigBtn