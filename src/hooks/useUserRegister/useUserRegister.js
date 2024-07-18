import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useUserRegister = () => {
    const isUserRegister = window.localStorage.getItem("token")
    const router = useRouter()

    useEffect(() => {
        if (!isUserRegister) {
            router.push("/login")
        }
    }, [isUserRegister, router])
}

export default useUserRegister
