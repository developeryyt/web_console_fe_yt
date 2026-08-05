import type {LabelProps} from "../../type";

const FeLabel = ({ text }: LabelProps ) => {
    return (
        <label className='label'>{text}</label>
    );
};

export default FeLabel;