import type {ChildrenProps} from "../../type";

const Container = ({ children }: ChildrenProps) => {
    return (
        <div className="container">
            <div className="inner">
                {children}
            </div>
        </div>
    );
};

export default Container;
