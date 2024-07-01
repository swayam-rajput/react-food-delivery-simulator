import React from 'react'

const Modal = ({open=true,onClose=null, children}) => {
    return (
        <div onClick={onClose} className={` fixed inset-0 z-50 flex items-center transition-opacity justify-center rounded-md  ${open ? ' opacity-100 visible backdrop-blur-sm ':' opacity-0 invisible '} `}>
            <div className={`p-8 w-80 text-center bg-slate-400 rounded-lg flex gap-6 flex-col justify-between `} >
                {children}
            </div>

        </div>
    )
}

export default Modal