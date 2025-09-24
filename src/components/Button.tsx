function Button({name, handleClick, className, children}: {name?: string, handleClick: ()=>void, className?: string, children?: React.ReactNode}) {
    return ( 
        <button onClick={handleClick} className={`flex cursor-pointer bg-bglight text-white dark:text-black px-3 py-1 rounded-lg border border-[#4F4F4F] hover:bg-[#1E1E1E] dark:hover:bg-[#F3F3F3] hover:font-semibold transition ${className}`}>
            {children} {name}
        </button>
     );
}

export default Button;