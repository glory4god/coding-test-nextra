import { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="Exam Bomb - 문제 은행" />
        <meta property="locale" content="ko_KR" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://exam-bomb-service.vercel.app"
        />
        <meta property="og:site_name" content="Exam Bomb" />
        <meta property="og:iamge" content="" />
        <meta
          property="og:description"
          content="원하는 과목을 자유롭게 공부해요"
        />
        <link type="image/x-icon" rel="icon" href="" />

        <meta property="title" content="Exam Bomb - 문제 은행" />
        <meta name="author" content="Yu Hayoung" />
        <meta name="description" content="원하는 과목을 자유롭게 공부해요" />
        <title>Exam Bomb - 문제 은행</title>
      </NextHead>
    </>
  );
};

export default Head;
