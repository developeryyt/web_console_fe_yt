import type {Equal, Expect} from "../utils/type_helper.ts";

export interface ChildrenProps {
    children: React.ReactNode;
}


export interface ButtonProps extends ChildrenProps {
    onClick: () => void;
    className: string;
}

function func(foo: string, obj: { bar: number, bas: boolean }):void {}

type FuncParameters = Parameters<typeof func>;

const getUser = () => {
    return Promise.resolve({
        id: "123",
        name: "John",
        email: "john@example.com",
    });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

const getLocationWeather = (locationId: string) => {
    return `Weather at location ${locationId}`;
};


type GetLocationWeatherReturn = ReturnType<typeof getLocationWeather>;

const getDetailedWeather = (
    locationId: string,
    details?: {
        tempUnit?: 'C' | 'F';
        includeForecast?: boolean;
    },
) => {
};
type GetDetailedWeatherParameters = Parameters<typeof getDetailedWeather>;

type tests = [
    Expect<Equal<GetLocationWeatherReturn, string>>,
    Expect<Equal<GetDetailedWeatherParameters, [locationId: string, { tempUnit?: 'C' | 'F'; includeForecast?: boolean }?]>>
];
