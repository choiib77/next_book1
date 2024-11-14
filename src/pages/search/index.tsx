// query string 을 사용하기 위해서 불러옴
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from '@/mock/books.json';
import BookItem from "@/components/book-item";

export default function Page(){
    // query string 
    // const router = useRouter();

    // const {q} = router.query;

    // return <h1>Search {q}</h1>

    return <div>
        {books.map((book)=>{
            <BookItem key={book.id} {...book}/>
        })}
    </div>
}

Page.getLayout= (page:ReactNode) =>{
    return <SearchableLayout>{page}</SearchableLayout>
}