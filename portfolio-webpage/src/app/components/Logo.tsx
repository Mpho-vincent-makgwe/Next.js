import Link from "next/link"

const Logo = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-2">
                <Link href={`/`} className="w-16 h-16 bg-black text-light flex items-center justify-center rounded-full text-3xl font-extrabold">V</Link>
            </div>
            
        </>
    )
}

export default Logo
