import type {Equal, Expect} from "../utils/type_helper.ts";



export interface CommonProps {
    onClick: () => void;
    className: string;
    children?: React.ReactNode;
}


type Status = 'loading' | 'success' | 'Error';
type ID = string | number;

type keys = 'name' | 'age';
type Use = {
    [K in keys]: string;
}

interface User1 {
    [key: string]: string;
}

function func(foo: string, obj: { bar: number, bas: boolean }):void {}

function func1({ hobby }: { hobby: string }, { name, age }: { name: string, age: number }):void {}

type Funcparams = Parameters<typeof func1>[1];

const obj:Funcparams = { name: "age", age: 10 }

type FuncParameters = Parameters<typeof func>;

function abc() {
    return 1;
}


type C = ReturnType<typeof abc>;
type D = typeof abc;

const f:D = () => {
    return 100;
}


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


type A = | { type: "a"; a: string } | { type: "b"; b: string; } | { type: "c"; c: string; d: string; }

type B = "a" | "b" | "c";

type ClickEvent = Extract<A, { a: string }>
