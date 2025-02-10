import React, { useState } from 'react'

import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CLUB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setSingleClub } from '@/redux/clubSlice'
import { useDispatch } from 'react-redux'



const ClubCreate = () => {
    const navigate = useNavigate();
    const [clubName,setClubName]=useState();
    const dispatch=useDispatch();
    const registerNewClub=async()=>{
        try{
           const res=await axios.post(`${CLUB_API_END_POINT}/register`,{clubName}, {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
        if(res?.data?.success){
            // dispatch(setSingleCompany(res.data.company));
            dispatch(setSingleClub(res.data.club));
            toast.success(res.data.message);
            const clubId = res?.data?.club?._id;
            navigate(`/admin/clubs/${clubId}`);
        }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Club Name</h1>
                    <p className='text-gray-500'>What would you like to give your club name? you can change this later.</p>
                </div>

                <Label>Club Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="CES,Pcon,Faces etc."
                    // onChange={(e) => setCompanyName(e.target.value)}
                    onChange={(e)=>setClubName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate("/admin/clubs")}>Cancel</Button>
                    
                    <Button onClick={registerNewClub}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default ClubCreate