import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  // router
  const onClickButton = () => {
    router.push("/test");
  };

  // router 프리패칭
  useEffect(()=>{
    router.prefetch("/test");
  },[]);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        {/* prefetch 하고 싶지 않을 때 fasle */}
        <Link href={"/search"} prefetch={false}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book1</Link>
        {/* link가 아닌 버튼으로 이동 */}
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  ) 
  
}


/**
 * next.js는 FCP를 단축하는 프레임워크이다.
 * react에서는 빈페이지를 로드를 하고 -> 그 다음에 js bunlde을 하는데
 * next의 경우에는 FCP -> 바로 js bunlde but 현재 페이지에서 필요한 js bundle만 전달함 ex) "/search" 접속 요청 -> Search js bundle
 * 그렇게 되면 페이지 이동 할 때 마다 js bundle을 해야하기에 프리패칭해야함 Pre-fetching (현재페이지에서 연결된 모든페이지를 js bundle)
 * 프리패칭을 확인하기 위해서는 npm run dev가 아닌 빌드해서 하는 프로덕션으로 해야함 // npm run build // npm run start
 * Link 태그로 되어 있어야 프리패칭됨 // button에 push로 한 거는 안됨 // 하고싶으면 useEffect함수 사용 router.prefetch()
 */