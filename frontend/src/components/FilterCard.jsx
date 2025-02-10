import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    
    {
        fitlerType: "Contribution Areas",
        array: ["Content", "Poster Design","Video Editing","Event Management","Website Design","Graphic Design"]
    },
    {
        fitlerType: "Club Names",
        array: ["CES", "NSS", "Pcon", "Web Team", "Faces"]
    }
    
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    // const changeHandler = (value) => {
    //     setSelectedValue(value);
    // }
    const changeHandler = (value) => {
        setSelectedValue(value);
        // console.log(value);
        // dispatch(setSearchedQuery(value)); // Dispatch immediately
    };
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
        
        
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Select Your Interest</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                                        {
                                fitlerData.map((data, index) => (
                                    <div key={index}>
                                        <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                                        {
                                            data.array.map((item, idx) => {
                                                const itemId = `id${index}-${idx}`;
                                                return (
                                                    <div key={itemId} className='flex items-center space-x-2 my-3'>
                                                        <RadioGroupItem value={item} id={itemId} />
                                                        <Label htmlFor={itemId}>{item}</Label>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                ))
                            }

            </RadioGroup>
        </div>
    )
}

export default FilterCard