import type {FormProps} from "../../type";

const FeInput = ({...props}: FormProps) => {
    
    return (
        <input {...props} className="ipt" />
    );
};

export default FeInput;