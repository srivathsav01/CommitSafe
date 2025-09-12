function Button({name, handleClick, className}: {name: string, handleClick: ()=>void, className?: string}) {
    return ( 
        <button onClick={handleClick} className={`cursor-pointer bg-bglight text-black dark:text-white px-3 py-1 rounded-lg border border-[#4F4F4F] hover:bg-[#1E1E1E] dark:hover:bg-[#F3F3F3] hover:text-white dark:hover:text-black transition ${className}`}>
            {name}
        </button>
     );
}

export default Button;