'use client'

import { deleteMember } from "@/back/admin/actions"
import { Eye, Pencil, Trash } from "lucide-react"
import Link from "next/link"



export function ViewButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/manage/members/view/${id}`}>
            <Eye className=" size-8 text-blue-950 hover:underline"/>
        </Link>
    )
}

export function EditButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/manage/members/edit/${id}`}>
            <Pencil className=" size-7 text-blue-950 hover:underline"/>
        </Link>
    )
}

export function DeleteButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/manage/members/delete/${id}`}>
            <Trash onClick={()=>deleteMember(id)} className=" size-7 text-blue-950 hover:underline"/>
        </Link>
    )
}