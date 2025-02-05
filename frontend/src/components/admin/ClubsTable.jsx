import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const ClubsTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered clubs</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/* <TableHead>Logo</TableHead> */}
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>club name</TableCell>
                    <TableCell>6-7-8990</TableCell>
                    <TableCell>
                        <Popover>
                            <PopoverTrigger><MoreHorizontal></MoreHorizontal></PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className='flex items-center gap-2'>
                                    <Edit2 className='w-4'/>
                                     <span>edit</span>
                                </div>

                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default ClubsTable