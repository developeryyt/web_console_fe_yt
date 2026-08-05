import {useState} from "react";

const useForm = <T extends Record<string, any>>(initalState: T) => {

    const [formState, setFormState] = useState<T>(initalState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormState(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value
            }
        }));
    }

    const resetForm = () => setFormState(initalState);

    return { formState, handleChange, resetForm }

}

export default useForm