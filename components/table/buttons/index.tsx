import { Eye, Pencil, Trash } from "lucide-react"
import Link from "next/link"



export function ViewButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/manage/members/view/${id}`}>
            <Eye className="text-blue-950  hover:text-blue-900 size-8 "/>
        </Link>
    )
}

export function EditButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/manage/members/edit/${id}`}>
            <Pencil className=" size-7 text-blue-950  hover:text-blue-900"/>
        </Link>
    )
}


export function DeleteButton( {id}:{id:number|undefined} ){
    return(
        <Link href={`/admin/manage/members/delete?id=${id}`}>
            <Trash  className="size-7 text-blue-950  hover:text-blue-900"/>
        </Link>
    )
}