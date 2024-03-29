'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, SearchIcon, X } from "lucide-react"
import SearchBox from "../searchBox"
import { usePathname, useSearchParams } from "next/navigation"


const links= [
    {href: '/', label: 'Home'},
    {href: '/contato', label: 'Contato'},
    {href: '/members', label: 'Membros'},
    {href:'/login', label:'Login'}
]


export default function NoSearchHeader(){
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
 
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    const toggleNavSearch = ()=> {
        if(isSearchOpen){
            toggleSearch()
        }
        else{
            toggleNav()
        }
    }

    useEffect(()=>{
        setIsSearchOpen(false)
        setIsNavOpen(false)

    }, [pathname,searchParams])

    return(
        <header style={{backgroundColor: '#0D2253'}} className="sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' >
                    <Image
                    width='500'
                    height='500'
                    src='/img/logo.png'
                    alt="Logo"
                    className="w-32 h-24"
                    />
                </Link>

                <div className="hidden md:flex flex-row gap-4">
                    {links.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <button className="bg-[#080735] font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24 transition-transform duration-300 transform hover:scale-110">
                                    {link.label}
                            </button>
                        </Link>
                    ))}
                </div>
                <nav className="flex justify-end ">
                    <div className="md:hidden">
                        {isNavOpen ?
                            <X 
                            onClick={toggleNavSearch}
                            className="text-white w-8 h-8 p-1 cursor-pointer"
                            /> 
                            :
                            <div className="flex gap-4">
                                <Menu
                                onClick={toggleNav}
                                className="w-10 h-10 p-1 text-white cursor-pointer"
                                />
                            </div>
                        }
                    </div>
                </nav>

                {isNavOpen &&(
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10 min-h-screen">
                        {links.map((links, index) => (
                            <Link key={index} href={links.href} className="flex items-center">
                                <button className="bg-[#080735] font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24 transition-transform duration-300 transform hover:scale-110">
                                    {links.label}
                                </button>
                            </Link>
                        ))}
                    </div>
                )}

                
            </div>
        </header>
    )
}