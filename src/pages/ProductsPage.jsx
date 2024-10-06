import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const ProductsPage = () => {
    let [input, setInput] = useState("")
    let [allData, setAllData] = useState([])
    let [categories, setCategories] = useState([])
    let [filterByOpt, setFilterByOpt] = useState([])
    let [selectedOption, setSelectedOption] = useState("All");
    let [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        let fetchingData = async () => {
            setIsLoading(true);
            try {
                let res = await axios.get("https://freetestapi.com/api/v1/cars")
                setIsLoading(false);
                setAllData(res.data);
                let allCategory = [...new Set(res.data.map((el) => el.make))]
                setCategories(allCategory)
                setFilterByOpt(res.data);
                setSelectedOption("All")

            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }

        }
        fetchingData()
    }, [])



    let handleSelect = (selectedOpt) => {
        setSelectedOption(selectedOpt);
        if (selectedOpt == "All") {
            setFilterByOpt(allData);
        } else {
            let filtered = allData.filter((el) => (el.make.toLowerCase() == selectedOpt.toLowerCase()))
            setFilterByOpt(filtered);
        }
    }

    let searchHandler = (e) => {
        setInput(e);
        if (!e) {
            if (selectedOption === "All") {
                setFilterByOpt(allData)
            } else {
                let filtered = allData.filter((el) => (el.make.toLowerCase() == selectedOption.toLowerCase()))
                setFilterByOpt(filtered);
            }
        } else {
            let search = filterByOpt.filter((el) => (
                el.model.toLowerCase().includes(e.toLowerCase())
            ))
            setFilterByOpt(search)
        }
    }


    return (
        <main className='screen-max-width  bg-[#dadada] common-padding'>
            <div className='flex justify-center'>
                <div className='px-5  rounded-full bg-white text-lg'>

                    <input type="text" className='outline-none border-none p-2 sm:w-[20rem] w-[8rem]' placeholder='Search car' value={input} onChange={(e) => searchHandler(e.target.value)} />

                    <select onChange={(e) => handleSelect(e.target.value)} className='outline-none border-l-2 '>
                        <option value="All">All</option>
                        {categories.map((el, ind) => (
                            <option value={el} key={ind}>{el}</option>
                        ))}
                    </select>
                </div>
            </div>
            {
                isLoading && <div className='flex justify-center w-[100%] mt-32'> <div className='loader'></div> </div>
            }
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-10 justify-center'>
                {
                    filterByOpt.map((el, ind) => (
                        <Card carInfo={el} key={el.id} />
                    ))
                }
            </div>
        </main>
    )
}

export default ProductsPage