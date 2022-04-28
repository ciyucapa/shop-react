import { useState } from "react";
import {Ieleccion} from '../interfaces'

const useToggle = () => {
    const [eleccion, setEleccion] = useState<Ieleccion>({
        menor: false,
        mayor: false
    })

    const onEleccionMenor = () => {
        setEleccion({
            menor: true,
            mayor: false
        })
    }

    const onEleccionMayor = () => {
        setEleccion({
            mayor: true,
            menor: false,
        })
    }

    return {
        eleccion,
        onEleccionMenor,
        onEleccionMayor,
    }
}

export default useToggle