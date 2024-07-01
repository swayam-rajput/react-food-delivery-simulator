import React from 'react'

const Loader = ({children}) => {
    return (
        <div className="absolute z-20 inset-0 flex flex-col h-full gap-4 items-center transition-all justify-center bg-slate-600/25 backdrop-blur-sm">
			<div className="loader text-black  pointer-events-none"></div>
            {children}
		</div>
    )
}

export default Loader