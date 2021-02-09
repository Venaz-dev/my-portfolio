import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Venaz Portfolio</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:image"
          content="https://techietainment.io/wp-content/uploads/2021/02/State-of-cryptocurrencies-in-Nigeria.jpg"
        />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:width" content="900" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          // transition={{ duration: 0.5,}}
          variants={{
            pageInitial: {
              // backgroundColor: '#444444',
              // transform: ' translateY(-100vh)'
              opacity: 0,
              // filter: 'invert()',
              // transform: 'translateX(-100vw)',
            },
            pageAnimate: {
              opacity: 1,

              // transform: ' translateY(0vh)',
              // backgroundColor: '#101010',
            },
            pageExit: {
              // backgroundColor: '#444444',
              // filter: 'invert()',
              opacity: 0,
              // transform: ' translateY(100vh)'
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
