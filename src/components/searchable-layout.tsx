import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchabe-layout.module.css';

// 특정 페이지에서만 노출되어야하는 컴포넌트의 경우 index.tsx -> Home컴포넌트 내에서 적용
export default function SearchableLayout({children} : {children:ReactNode}){

    const router = useRouter();
    const [search, setSearch] = useState("");

    // 새로고침시 쿼리스티링도와 동일하게 값 노출
    const q = router.query.q as string;
    useEffect(()=>{
        setSearch(q || "");
    },[q]);

    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
    }

    const onSubmit = () =>{
        // 검색 안하거나 검색어가 동일할 경우 페이지이동 X
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    }

    // 엔터키 검색
    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            onSubmit();
        }
    }

    return <div>
        <div className={style.searchba_container}>
            <input value={search} onChange={onChangeSearch} type="text" placeholder="검색어를 입력하세요..." onKeyDown={onKeyDown} />
            <button onClick={onSubmit}>검색</button>
        </div>
        {children}
    </div>
};