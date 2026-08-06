import type {Equal, Expect} from "../../utils/type_helper.ts";

{

    type ReturnWhatIPassIn<T> = T;

    type tests = [
        Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
        Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
        Expect<Equal<ReturnWhatIPassIn<true>, true>>,
        Expect<Equal<ReturnWhatIPassIn<false>, false>>,
        Expect<Equal<ReturnWhatIPassIn<null>, null>>,
    ];
}
{

    const returnWhatIPassIn = <T>(t: T) => {
        return t;
    };

    const one = returnWhatIPassIn(1);
    const matt = returnWhatIPassIn("matt");

    type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];

}