import FeLabel from "../../components/form/FeLabel.tsx";
import FeInput from "../../components/form/FeInput.tsx";
import useForm from "../../hooks/useForm.ts";

const Aside = () => {

    const { formState, handleChange, resetForm } = useForm({
        ip: {
            type: 'text',
            value: '',
            placeholder: 'Enter Valid Public IP Here',
            name: 'ip'
        }
    })


    return (
        <div className='aside_wrap'>
            <aside>
                <h3></h3>
                <div>
                    <FeLabel text={'Public Ip'} />
                    <FeInput onChange={handleChange} name={formState.ip.name} type={formState.ip.type} value={formState.ip.value} placeholder={formState.ip.placeholder} />
                </div>
            </aside>
        </div>
    );
};

export default Aside;