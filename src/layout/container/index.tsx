import type {ChildNodes} from "../../type";


const Container = ({ children }: ChildNodes) => {
    return (
        <div className="container">
            <div className="inner">
                {children}
            </div>
        </div>
    );
};

export default Container;
