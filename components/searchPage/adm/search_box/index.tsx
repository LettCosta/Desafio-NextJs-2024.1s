'use client'

import { Search as SearchIcon} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdmSearchBox(){

    const searchParams= useSearchParams()
    const router= useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''> (searchParams.get('query') || '')


    const handleSearch = (query:string) => {
        if(!query){
            return
        }
        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/admin/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        handleSearch(searchTerm)
    }




    return (
            <form onSubmit={handleSubmit} className="w-3/4 flex justify-end" autoComplete="off">
                <div className="flex flex-col items-center gap-2 my-10">
                    <div className="relative flex items-center">
                        <input
                        id="search"
                        name="search"
                        type="text"
                        className="w-full rounded-3xl px-4 py-1 text-black border-white caret-white transition-all duration-300"
                        placeholder="Faça sua busca!"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </form>
    )
}