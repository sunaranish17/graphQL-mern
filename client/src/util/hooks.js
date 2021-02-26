
export const useForm = (callback, initalState = {}) => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
}