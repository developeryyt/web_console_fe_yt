import type {ButtonProps} from "../../type";


const FeButton = ({ onClick,  children, className}: ButtonProps) => {

    return (
        <button onClick={onClick} className={className}>{children}</button>
    );
};

export default FeButton;
