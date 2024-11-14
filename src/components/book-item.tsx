import { BookData } from "@/types"
import Link from "next/link"
import style from './book-item.module.css';

export default function BookItem({
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl
    
} : BookData){
    return <Link href={`/book/${id}`} className={style.container}>
        <div className={style.imgBox}>
            <img src={coverImgUrl} />
        </div>
        <div>
            <h3 className={style.title}>
                {title}
            </h3>
            <p className={style.subTitle}>{subTitle}</p>
            <br />
            <p className={style.author}>{author} | {publisher}</p>
        </div>
    </Link>
}
