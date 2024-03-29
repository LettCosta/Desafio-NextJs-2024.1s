import Link from "next/link";

export default function LoginPage(){
    return(
        <div style={{
        backgroundImage: 'url(/img/login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position:'relative',
        }}
        >
            <div className="flex justify-end">
                <form className="bg-black/60 w-full md:w-2/5 min-h-screen flex flex-col items-center">
                        <h1 className="text-white my-24 3xl:my-32 text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-center">Bem vindo de volta!</h1>
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl ">Email</label>
                        <input className=" rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2"></input>
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl ">Senha</label>
                        <input className=" rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" ></input>
                    <Link href={`/admin/manage/members`}> 
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold px-5 md:px-8 text-white rounded-3xl h-7 md:h-8 lg:h-10 xl:h-12  text-center w-full md:w-auto text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}