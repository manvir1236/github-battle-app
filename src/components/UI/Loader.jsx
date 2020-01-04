import React, { useEffect, useState } from 'react'

const Loader = props => {
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => updateLoader(), 200)

        // Component will UnMound
        return () => {
            clearInterval(intervalId)
        }
    })

    const updateLoader = () => {
        if (loading === 3) {
            setLoading(0)
            return;
        }
        setLoading(loading + 1)
    }

    const dots = Array(loading + 1).join('.')

    return <h1 className='font-weight-light'>{props.text}{dots}</h1>
}

export default Loader