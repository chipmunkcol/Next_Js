# NextJs

1. 설치 
    - npx create-next-app@latest
    - checkBox 체크 (git bash로 열면 선택 체크가 안돼서 VS Code 터미널 열어서 하자)
2. react-router 기능
    - pages폴더 자체가 Url (ex. index.js 에 넣으면 "/") 
    - pages폴더에 meal.js 파일을 만들던가 pages/meal 폴더에 index.js 넣으면 "/meal"
    - dinamic page는[]안에 파일이름 넣자 (ex. [mealId].js)
    - params 역할은 -> nextjs hook 사용  
        - import { useRouter } from 'next/router';
        - const router = useRouter();
        - console.log(router.query.mealId); (query에 접근해서 특정 url을 받아올 수 있음!)
    - page 간 navigate는 <a href="/">태그 대신 <Link href="/"> 태그 사용
3. css
    - css모듈 className을 props 형태로 보내고 받음
    - styled jsx (아래 형태로 해당 컴포넌트 태그 or className에 직접 style을 입혀줌) 
    <style jsx>{`
        h1 {
            color: "red";
        } 
        div {
            font-size: "10rem";
        }
    `}</style>
    - Global 설정 (but, 요렇게 하면 다른 페이지에선 적용안됨)
    <style jsx global>{`
        div {
            font-weight: bold;
        }
    `}</style>
4. _app 컴포넌트
    - pages 폴더에 _app.js 폴더를 만들어서 사용하면 router 상단에 전역 componenets 넣을 때처럼 할 수 있음
    global style 주기도 편하다 (요기다 넣어야 다른 페이지에서도 적용됨)
    const App = ({ Component, pageProps }) => {
        return (
            <>
                <Navbar />
                <Component {...pageProps} />
                <style>{`
                    div {
                        color: red;
                    }
                `}</style>
            </>
        )
    }