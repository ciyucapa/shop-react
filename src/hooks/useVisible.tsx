import { useState } from "react"

const useVisible = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const onVisible = () => {
        setVisible(!visible)
    };

    return {
        visible,
        onVisible,
    }
}

export default useVisible