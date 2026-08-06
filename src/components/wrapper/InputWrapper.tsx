import type {ChildNodes} from "../../type";

const InputWrapper = ({ children }: ChildNodes) => {
    return (
        <div className='input_wrap'>
            {children}
        </div>
    );
};

export default InputWrapper;