import type {CommonProps} from "../../type";


const FeButton = ({ onClick,  children, className}: CommonProps) => {

    return (
        <button onClick={onClick} className={className}>{children}</button>
    );
};

export default FeButton;
