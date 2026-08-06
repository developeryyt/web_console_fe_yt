import type {Equal, Expect} from "../../utils/type_helper.ts";

{
    /*
    * Basic Question
    * */

    const obj = {
        hello: 'world',
        hello2: 'world2',
        hello3: 'world3',
    } as const;

    type TestingValue = typeof obj[keyof typeof obj];
    type Keys = keyof typeof obj;

    type B = {
        [K in TestingValue] : K;
    }

    type C = {
        [T in Keys] : T
    };

    // type tests = [Expect<Equal<TestingFramework, "hello" | "hello2" | "hello3">>];

}
{
    interface Person {
        first: string;
        last: string;
    }

    const p: Person = { first: 'Jane', last: 'Jacobs' };

// ---

    const v = typeof p
    type t = typeof p

// ---

    const first = p['first'];
    type First = Person['first'];

}
{
    const myFunc = () => {
        return "hello";
    };

    type MyFuncReturn = ReturnType<typeof myFunc>;

    type tests = [Expect<Equal<MyFuncReturn, string>>];

    let a:MyFuncReturn = 'string result';

}
{

    function func(
        foo: string,
        obj: {
            bar: number;
            bas: boolean;
        }
    ) {

    }

    /*
    * parameter 값은 tuple 로나옴
    * */
    type FuncParameters = Parameters<typeof func>;

}
{
    const getUser = () => {
        return Promise.resolve({
            id: "123",
            name: "John",
            email: "john@example.com",
        });
    };

    type ReturnValue = Awaited<ReturnType<typeof getUser>>;
}
{
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

}
{
    type Event =
        | {
        type: "click";
        event: MouseEvent;
    }
        | {
        type: "focus";
        event: FocusEvent;
    }
        | {
        type: "keydown";
        event: KeyboardEvent;
    };

    type ClickEvent = Extract<Event, { type: "click" }>;
    type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
}
{
    type Event =
        | {
        type: "click";
        event: MouseEvent;
    }
        | {
        type: "focus";
        event: FocusEvent;
    }
        | {
        type: "keydown";
        event: KeyboardEvent;
    };

    type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

    type tests = [
        Expect<
            Equal<
                NonKeyDownEvents,
                | { type: "click"; event: MouseEvent }
                | { type: "focus"; event: FocusEvent }
            >
        >,
    ];
}

{
    const fakeDataDefaults = {
        foo: "bar",
        bar: 123,
        baz: true,
    };

    type FooType = typeof fakeDataDefaults['foo']
    type BarType = typeof fakeDataDefaults['bar']
    type BazType = typeof fakeDataDefaults['baz']

    type tests = [
        Expect<Equal<FooType, string>>,
        Expect<Equal<BarType, number>>,
        Expect<Equal<BazType, boolean>>,
    ];
}
{
    type Event =
        | {
        type: "click";
        event: MouseEvent;
    }
        | {
        type: "focus";
        event: FocusEvent;
    }
        | {
        type: "keydown";
        event: KeyboardEvent;
    };

    type EventType = Event['type'];

    type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];

}
{
    const Color = {
        Red: "red",
        Green: "green",
        Blue: "blue",
    } as const;

    type Red =  typeof Color['Red'];
    type Green = typeof Color['Green'];
    type Blue = typeof Color['Blue'];

    type tests = [
        Expect<Equal<Red, "red">>,
        Expect<Equal<Green, "green">>,
        Expect<Equal<Blue, "blue">>,
    ];

}
{
    type Event =
        | {
        type: "click";
        event: MouseEvent;
    }
        | {
        type: "focus";
        event: FocusEvent;
    }
        | {
        type: "keydown";
        event: KeyboardEvent;
    };

    type EventType = Event['type']

    type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];

}
{
    const Color = {
        Red: "red",
        Green: "green",
        Blue: "blue",
    } as const

    type RedAndBlue = typeof Color['Red' | 'Blue'];

    type tests = [
        Expect<Equal<RedAndBlue, "red" | "blue">>
    ];

}
{
    const Color = {
        Red: "red",
        Green: "green",
        Blue: "blue",
    } as const;

    type RedGreenBlueValue = typeof Color[keyof typeof Color];


    type tests = [
        Expect<Equal<RedGreenBlueValue, "red" | "blue" | "green">>
    ];



}
{
    const rgb = ["red", "green", "blue"] as const;

    type RedAndBlue = typeof rgb[0 | 1];
    type RGB = typeof rgb[number];


    type tests = [
        Expect<Equal<RedAndBlue, "red" | "green">>,
        Expect<Equal<RGB, "red" | "green" | "blue">>,
    ];

}
{


    type Event =
        | {
        type: "click";
        event: MouseEvent;
    }
        | {
        type: "focus";
        event: FocusEvent;
    }
        | {
        type: "keydown";
        event: KeyboardEvent;
    };

    type EventType = Exclude<Event, { type: "keydown" }>['type']

    type tests = [Expect<Equal<EventType, "click" | "focus">>];

}