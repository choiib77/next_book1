// CSS Module APP 컴포넌트를 제외하고 다른 페이지의 css의 경우에는 module.css로 해야한다
// globals.css 초기화 / Home.module.css 삭제
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import books from '@/mock/books.json';
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

// SSR 사전 랜더링 / 백앤드 서버에서 가져옴
export const getServerSideProps = () =>{
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // 딱한번만 실행될 함수 / 서버 환경에서만 사용하는 함수

  const data = "hello";

  return {
    props :{
      data,
    }
  }
};

export default function Home({data} : InferGetServerSidePropsType<typeof getServerSideProps> ) {

  /**
   * getServerSideProps or Home(index.tsx)의 경우 서버에서 한번 실행되기때문에
   * window.location 사용하면 에러남(undefind라서)
   * 브라우저에서 사용하고싶다면 useEffect 사용하면 됨 (마운트 된 이후이기에 가능함)
   * useEffect(()=>{
   *  console.log(data);
   * },[])
   * 
   * InferGetServerSidePropsType<typeof getServerSideProps> 자동으로 타입이 추론된다
   * */

  console.log(data);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book)=><BookItem key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book)=><BookItem key={book.id} {...book}/>)}
      </section>
    </div>
  );
}

// seatchlayout 리턴 
// 자바스크립트는 선언된 함수는 사실 객체이다. 그래서 Home. 메서드 가능
Home.getLayout = (page : ReactNode) =>{
  return <SearchableLayout>{page}</SearchableLayout>
}