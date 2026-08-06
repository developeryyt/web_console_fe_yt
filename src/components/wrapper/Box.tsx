import type {ChildNodes} from "../../type";


const Box = ({ children, className }: ChildNodes) => {
    return (
        <div className={`box ${className}`}>
            {children}
        </div>
    );
};

export default Box;