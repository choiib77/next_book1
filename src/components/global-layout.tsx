import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

// 공통으로 들어가는 레이아웃
export default function GlobalLayout({
    children
}:{
    children:ReactNode
}) {
    return (
    <div className={style.container}>
        <header className={style.header}>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
        </header>
        <main className={style.main}>
            {children}
        </main>
        <footer className={style.footer}>제작 @winterlood</footer>
    </div>
    ) 
}
