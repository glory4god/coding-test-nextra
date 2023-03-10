const config = {
  logo: <span>Coding Test Practice</span>,

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
        <meta name="description" content={'Coding Test Practice'} />
        <meta name="keyword" content={'Coding Test Practice'} />
        <meta name="og:description" content={'Coding Test Practice'} />
        <meta name="og:title" content={'Coding Test Practice'} />
      </>
    );
  },
  project: {
    link: 'https://github.com/glory4god',
  },
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme',
  },
};

export default config;
