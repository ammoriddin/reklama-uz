"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const FilterUserRols = ({ firstComponent, secondComponent, thirdComponent }) => {
    const router = useRouter()
    const [role, setRole] = useState(null)

    useEffect(() => {
        const userRole = window.localStorage.getItem("role")
        if (userRole) {
            setRole(parseInt(userRole, 10))
        } else {
            router.push('/login')
        }
    }, [router])

    if (role === null) {
        return <p>loading...</p>
    }

    switch (role) {
        case 1:
            return firstComponent
        case 2:
            return secondComponent
        case 3:
            return thirdComponent
        default:
            router.push('/not-found')
            return null
    }
}

export default FilterUserRols