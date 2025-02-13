import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Loading = () => {
    const [count, setCount] = useState(3)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((curentCount) => {
                if (curentCount === 1) {
                    clearInterval(interval)
                    setRedirect(true)
                }
                return curentCount - 1
            })
        }
            , 1000)
        return () => clearInterval(interval)
    }, [])

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div>
            No Premission,Redirec in {count}
        </div>
    )
}

export default Loading
