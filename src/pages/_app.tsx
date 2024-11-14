import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// 타입 별칭 추가 / 타입확장 / getlayout이 없을 수도 있으니 ? 추가
type NextPageWithLayout = NextPage &{
  getLayout? : (page : ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps & {
  // 타입확장
  Component : NextPageWithLayout
}) {

  // getLayout -> undefind일때의 조건도 넣어줘야함
  const getLayout = Component.getLayout ?? ((page:ReactNode)=>page);
  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  ) 
}

/**
 * next.config.mjs 파일에서 > true를 false로 바꾼다 
 * // 이유는 디버깅할 때 힘들어서 / npm run dev 두번 실행해야하는 번거로움
 */
