import FeLabel from "../../components/form/FeLabel.tsx";
import FeInput from "../../components/form/FeInput.tsx";
import useForm from "../../hooks/useForm.ts";
import InputWrapper from "../../components/wrapper/InputWrapper.tsx";
import FeButton from "../../components/button/FeButton.tsx";
import Box from "../../components/wrapper/Box.tsx";

const Aside = () => {

    const { formState, handleChange, resetForm } = useForm({
        ip: {
            type: 'text',
            value: '',
            placeholder: 'Enter Valid IP Here (xxx.xxx.xxx.xxx)',
            name: 'ip'
        }
    })


    return (
        <div className='aside_wrap'>
            <aside>
                <h3></h3>

                <InputWrapper>
                    <FeLabel text={'Remote Ip'} />
                    <FeInput onChange={handleChange} name={formState.ip.name} type={formState.ip.type} value={formState.ip.value} placeholder={formState.ip.placeholder} />
                </InputWrapper>


                <Box className='mt-10'>
                    <FeButton onClick={() => {}} className={'btn_test_connect'}>
                        Test Connection
                    </FeButton>
                </Box>
            </aside>
        </div>
    );
};

export default Aside;