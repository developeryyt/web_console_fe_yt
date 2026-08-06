import type {Equal, Expect} from "../utils/type_helper.ts";



export interface CommonProps {
    onClick: () => void;
    className?: string;
    children?: React.ReactNode;
}

export type ChildNodes = Pick<CommonProps, 'children' | 'className'>


export interface FormProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value: string | number;
    placeholder?: string;
    name: string;
}

export type LabelProps = { text: string };
