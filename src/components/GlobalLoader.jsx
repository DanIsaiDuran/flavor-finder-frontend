import React, { useContext } from 'react'
import { LoaderContext } from './context/LoaderContext';

const GlobalLoader = () => {

    const {isLoading} = useContext(LoaderContext);

    if (!isLoading) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    {/* <p className="text-white mt-4 text-lg">Loading...</p> */}
                </div>
            </div>
        </>
    )
}

export default GlobalLoader
