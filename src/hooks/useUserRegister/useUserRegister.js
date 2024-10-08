'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useUserRegister = () => {
    const router = useRouter()

    useEffect(() => {
        const isUserRegister = window.localStorage.getItem("token")
        console.log(isUserRegister);

        if (!isUserRegister) {
            router.push("/login")
        }
    }, [router])
}

export default useUserRegister
