import React from 'react'

const Button = ({className=' ',value, onClick, disabled ,type='button'}) => {
    const class_val = `${value === '+' || value === '-' ? 'rounded-full':'rounded-lg' } shadow-sm shadow-slate-300 dark:bg-slate-300 bg-slate-200 active:scale-95 scale-100 font-semibold uppercase transition tracking-wide text-sm dark:text-black  active:opacity-40 hover:bg-opacity-90 `+(disabled ? ' disabled:cursor-not-allowed disabled:opacity-40':'')
    
    return (
        <button type={type} disabled={disabled} className={class_val+" "+className} onClick={onClick} >{value}</button>
        
    )
}

export default Button;