import { useState } from "react"

export const useTab = () => {
    const [value, setValue] = useState('default')

    return [value, setValue]
}