import React, { useEffect, useState } from 'react'

const Toast = ({ message='Fuck off son', isVisible=false }) => {
    const [visibility,setVisible] = useState(false)
    useEffect(() => {
        if (isVisible) {
            const init_timer = setTimeout(() => setVisible(true),400)
            // setVisible(true)
            const timer = setTimeout(() => setVisible(false), 3000)
            return () => {clearTimeout(timer);clearTimeout(init_timer) }
        }
    }, [isVisible])
    return (
        <div
            className={`fixed bottom-4 right-1/2 transform translate-x-1/2 z-50  transition-all duration-300 ${
                visibility ? '-translate-y-4' : ' translate-y-20 opacity-0'
            }`}
        >
            <div className="shadow-green-600 p-4 rounded shadow-sm  border-green-500 border ">
                {message}
            </div>
        </div>
    )
}

export default Toast;