import { useState } from "react"

const useToggle = () => {
    const [menor, setMenor] = useState(false);
    const [mayor, setMayor] = useState(false);

    const onMenor = () => {
        setMenor(true);
        setMayor(false);
    }

    const onMayor = () => {
        setMayor(true);
        setMenor(false);
    }


    return {
        onMayor,
        onMenor,
        menor,
        mayor,
    }
}

export default useToggle