import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ClubsTable from './ClubsTable'
import { useNavigate } from 'react-router-dom'

const Clubs = () => {
    const navigate=useNavigate();
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/clubs/create")}>New Club</Button>
                    
                </div>
                <ClubsTable/>
            </div>
        </div>
    )
}

export default Clubs