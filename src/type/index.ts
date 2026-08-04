export interface ChildrenProps {
    children: React.ReactNode;
}


export interface ButtonProps extends ChildrenProps {
    onClick: () => void;
    className: string;
}