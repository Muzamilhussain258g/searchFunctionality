import React from 'react'
import { CiCircleCheck } from 'react-icons/ci';
import { GiGasPump } from "react-icons/gi";
import { GiSteeringWheel } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";



const Card = ({ carInfo }) => {
    let { engine, make, model, color, price, year, features, fuelType, transmission } = carInfo;
    return (


        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='flex text-slate-500 justify-between items-center'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{model}</h5>
                <p className='text-xl'>{make}</p>
            </div>
            <div className='mt-5'>
                <h4 className='text-xl font-semibold tracking-wide'>
                    Features:
                </h4>
                <ul className='list-disc list-inside'>

                    {features.map((el, ind) => <li key={ind} >{el}</li>)}
                </ul>
            </div>
            <div className='flex justify-between mt-10'>
                <div className='flex flex-col items-center'>
                    <GiGasPump className='text-2xl ' />
                    <p className='text-lg text-gray-700'>{fuelType}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <GiSteeringWheel className='text-2xl' />
                    <p className='text-lg text-gray-700'>{transmission}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <IoCarSportSharp className='text-2xl' />
                    <p className='text-lg text-gray-700'>{engine}</p>
                </div>
            </div>
            <div className='flex justify-evenly mt-5'>
                <div className='flex text-xl'>
                    <p className=' '>Color:</p>
                    <p className=' text-gray-500'>{color}</p>
                </div>
                <div className='flex text-xl'>
                    <p className=' '>Year:</p>
                    <p className=' text-gray-500'>{year}</p>
                </div>
            </div>
            <div className='flex mt-3 text-2xl font-bold justify-center'>
                <h3>Price:</h3>
                <h3 className='text-gray-400'>{price}$</h3>
            </div>
        </a>


    )
}

export default Card