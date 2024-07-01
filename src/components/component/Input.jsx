import React from 'react'

const Input = ({className,value=null,placeholder, onChange=null,autoFocus=false,pattern=null,required=false, disabled=false}) => {
    const clsNames = '  rounded-md dark:bg-slate-200 bg-slate-300 outline-none focus:outline focus:outline-slate-300 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none disabled:bg-opacity-60 disabled:cursor-not-allowed '
    return (
        <input className={clsNames+" "+className}  defaultValue={value}   required={required} disabled={disabled} placeholder={placeholder} onChange={onChange} autoFocus={autoFocus} pattern={pattern} />
    )
    
}

export default Input