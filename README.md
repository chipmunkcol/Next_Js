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
    - router.push('/' + props.id); 형태로 동적 url 전달

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
                <style jsx global>{`
                    div {
                        color: red;
                    }
                `}</style>
            </>
        )
    }

5. redirect & rewrite (api 숨기기)
    - next.config.js 파일에서
    async redirects() {
        return [
            {
                source: "/redirect URL",
                destination: "/destination URL", 
                permanent(선택): false,
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `숨기고 싶은 api key + URL `
            }
        ]
    }
    요렇게 rewrites 설정해놓고 받고 싶은 컴포넌트에서 fetch('/api/movies') 로 받아올 수 있음 fetch('/api/movies') 로 썻지만 fetch(`숨기고 싶은 api key + URL`) 로 받아옴!

6. Page pre-rendering 방법!
    - request -> /some-route -> return pre-rendered page(Good for SEO!) -> Hydrate with React code once loaded -> Page / App is interactive
    -> Two forms of pre-rendering
        Static Generation / Server-side rendering
    1-1) Static Generation 방법 _build 프로세스 중에 pre-rendering함
     export async function getStaticProps() {
         const DUMMY_MOVIE = await fetch('/api/movies').then((res) => res.json())
        return {
            props: {
                movies: DUMMY_MOVIE
            },
            revalidate: 1 //seconds(설정한 시간 마다 re pre-rendering 한다)
        }
     }
     // 요렇게 해주면 movie 정보가 들은 props를 해당 page의 컴포넌트가 받을수 있음 useEffect를 통해 컴포넌트 마운트 후 movie 정보를 받은게 아니기 때문에 SEO가 가능해진다😮
    1-2) getStaticPath 같이 써야하는듯
    export async function getStaticPath() {
        return {
            fallback: false,
            path: [
                {
                    params: {
                        movieId: 'm1'
                    },
                },
                {
                    params: {
                        movieId: 'm2'
                    },
                },
            ]
        }
         
    }

     2) Server-side rendering 방법(자주 바뀌는 api 의 경우 실시간 반영)
     export async function getServerSideProps(context) {
        const req = context.req;
        const res = context.res;

        // const reply = await fetch('댓글 같은 실시간 반영 할 api') 
     }
        return {
            props: {
                reply: reply
            }
        }
    
7. 풀스택!✨ (api폴더)
    // POST /api/new-movie
    function handler(req, res) {
        if (req.method === 'POST') {
            const data = req.body;

            const { title, image, description } = data;
        }
    }

    export default handler;

    