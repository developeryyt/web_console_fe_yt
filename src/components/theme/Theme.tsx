import FeButton from "../button/FeButton.tsx";
import {Lamp, MoonIcon} from "lucide-react";
import {useCallback, useState} from "react";


const Theme = () => {

    const [theme, setTheme] = useState<string>("light");

    /*
    * 클로저 vs react의 상태 관리 차이 이해
    * useCallback의 의존성 배열을 비워 뒀기 때문 themehandler는 딱 한번 생성
    * 직접 값 전달은 "클로저"에 갇힌 값을 사용
    * 함수형 업데이트는 React가 최신 state를 인자로 넘겨줌
    * 함수가 언제 생성되었는지와 무관하게, 호출되는 시점의 최신 상태를 받음
    * */
    const themeHandler = useCallback(() => {
        setTheme(prev => {
            const newTheme = prev === 'light' ? "dark" : "light";
            document.body.classList.remove(prev);
            document.body.classList.add(newTheme);
            return newTheme;
        })
    },[])

    return (
        <FeButton onClick={themeHandler} className={"btn_theme"}>
            {theme === 'light' && <Lamp></Lamp>}
            {theme === 'dark' && <MoonIcon fill={'#fff'}></MoonIcon>}
        </FeButton>
    );
};

export default Theme;
