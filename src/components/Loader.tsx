function Loader() {
    return ( 
        <>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50  bg-opacity-70 backdrop-blur-sm">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-textprimary"></div>
        </div>
        </>
     );
}

export default Loader;