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
        <meta property="og:title" content="" />
        <meta property="locale" content="ko_KR" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:iamge" content="" />
        <meta property="og:description" content="" />
        <link type="image/x-icon" rel="icon" href="" />

        <meta property="title" content="" />
        <meta name="author" content="" />
        <meta name="description" content="" />
        <title></title>
      </NextHead>
    </>
  );
};

export default Head;
