const config = {
  logo: <span>Exam-Bomb Documentation</span>,

  head: () => {
    return (
      <>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" /> */}
        {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
        {/* <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        /> */}
        <meta httpEquiv="Content-Language" content="ko" />
        <meta
          name="description"
          content={
            '정보처리기사, SQLD 등 다양한 시험을 풀 수 있는 환경을 제공해요!'
          }
        />
        <meta
          name="keyword"
          content={'정보처리기사, SQLD, 필기시험, 문제은행, 필기시험, 시험'}
        />
        <meta
          name="og:description"
          content={
            '정보처리기사, SQLD 등 다양한 시험을 풀 수 있는 환경을 제공해요!'
          }
        />
        <meta name="og:title" content={'ExamBomb 문제은행 서비스입니다.'} />
      </>
    );
  },
  project: {
    link: 'https://github.com/Team-ere',
  },
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme',
  },
};

export default config;
