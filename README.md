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