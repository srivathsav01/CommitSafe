function Error() {
    return ( 
        <>
        <div className="flex flex-col items-center justify-center h-[50vh] bg-color-bgprimary text-color-textprimary">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>
        </div>
        </>
     );
}

export default Error;