import type {Equal, Expect} from "../../utils/type_helper.ts";

{
    type Route = "/" | "/about" | "/admin" | "/admin/users";

    type C = {
        age: number;
        name: string;
    }

    type D = {
        [K in keyof C]: C[K]
    }

    type RoutesObject = {
        [K in Route]: K
    }

    type tests = [
        Expect<
            Equal<
                RoutesObject,
                {
                    "/": "/";
                    "/about": "/about";
                    "/admin": "/admin";
                    "/admin/users": "/admin/users";
                }
            >
        >,
    ];
}

{

    interface Attributes {
        firstName: string;
        lastName: string;
        age: number;
    }

    type AttributeGetters = {
        [K in keyof Attributes]: () => Attributes[K]
    }

    type tests = [
        Expect<
            Equal<
                AttributeGetters,
                {
                    firstName: () => string;
                    lastName: () => string;
                    age: () => number;
                }
            >
        >,
    ];

}
{

    interface Attributes {
        firstName: string;
        lastName: string;
        age: number;
    }

    type AttributeGetters = {
        [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
    }

    type tests = [
        Expect<
            Equal<
                AttributeGetters,
                {
                    getFirstName: () => string;
                    getLastName: () => string;
                    getAge: () => number;
                }
            >
        >
    ];

}
{


    type Route =
        | {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    }
        | { route: "/about"; search: {} }
        | { route: "/admin"; search: {} }
        | { route: "/admin/users"; search: {} };

    // type RoutesObject = {
    //     [R in Route as R['route']]: R['search']
    // };

    type RoutesObject = {
        [R in Route['route']]: Extract<Route, { route: R}>['search']
    }

    type tests = [
        Expect<
            Equal<
                RoutesObject,
                {
                    "/": {
                        page: string;
                        perPage: string;
                    };
                    "/about": {};
                    "/admin": {};
                    "/admin/users": {};
                }
            >
        >,
    ];

}
{
    interface Values {
        email: string;
        firstName: string;
        lastName: string;
    }

    type ValuesAsUnionOfTuples = { [K in keyof Values]: [K, Values[K]] }[keyof Values]

    type tests = [
        Expect<
            Equal<
                ValuesAsUnionOfTuples,
                ["email", string] | ["firstName", string] | ["lastName", string]
            >
        >
    ];

}
{
    interface FruitMap {
        apple: "red";
        banana: "yellow";
        orange: "orange";
    }

    type TransformedFruit = {
        [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
    }[keyof FruitMap]

    type tests = [
        Expect<
            Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
        >,
    ];
}

{

    type Fruit =
        | {
        name: "apple";
        color: "red";
    }
        | {
        name: "banana";
        color: "yellow";
    }
        | {
        name: "orange";
        color: "orange";
    };

    type TransformedFruit = {
        [F in Fruit as F['name']] : `${F['name']}:${F['color']}`
    }[Fruit['name']]

    type tests = [
        Expect<
            Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
        >,
    ];

}

