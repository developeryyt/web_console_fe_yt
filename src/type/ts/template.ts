import type {Equal, Expect} from "../../utils/type_helper.ts";

{

    type Path = `/${string}`;

    function makeUrl(path: Path) {
        return `https://mywebsite.com${path}`
    }


    // makeUrl("/users");
    // makeUrl("users/1");

}

{
    type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

    type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

    type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/products/:id">>];

}
{
    type Top = "t-shirt" | "shirts" | "jacket";

    type Bottom = "jeans" | "skirt" | "slacks";

    type Outfit = `${Top} with ${Bottom}`

    type tests = [
        Expect<
            Equal<
                Outfit,
                | "t-shirt with jeans"
                | "t-shirt with skirt"
                | "t-shirt with slacks"
                | "shirts with jeans"
                | "shirts with skirt"
                | "shirts with slacks"
                | "jacket with jeans"
                | "jacket with skirt"
                | "jacket with slacks"
            >
        >
    ];

}
{

    type Template = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

    type ObjectOfKeys = Record<Template, string>;

    type tests = [
        Expect<
            Equal<
                ObjectOfKeys,
                {
                    userId: string;
                    userName: string;
                    postId: string;
                    postName: string;
                    commentId: string;
                    commentName: string;
                }
            >
        >,
    ];

}
{
    type Event = `log_in` | "log_out" | "sign_up";

    type ObjectOfKeys = {
        [K in Event as Uppercase<K>]: string;
    };

    type tests = [
        Expect<
            Equal<
                ObjectOfKeys,
                {
                    LOG_IN: string;
                    LOG_OUT: string;
                    SIGN_UP: string;
                }
            >
        >,
    ];

}