import { setSingleClub } from '@/redux/clubSlice'
import { setAllJobs } from '@/redux/jobSlice'
import { CLUB_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetClubById = (clubId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleClub = async () => {
            try {
                const res = await axios.get(`https://clubconnect-1.onrender.com/api/v1/club/get/${clubId}`,{withCredentials:true});
                console.log(res.data.club);
                if(res.data.success){
                    dispatch(setSingleClub(res.data.club));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleClub();
    },[clubId, dispatch])
}

export default useGetClubById