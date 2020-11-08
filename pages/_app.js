import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ duration: 1,}}
        variants={{
          pageInitial: {
            // opacity: 0,
            // transform: 'translateX(-100vw)',
            
            
          },
          pageAnimate: {
           
            transform: ' translateX(0)',
            backgroundColor: '#1d1d1d',
          },
          pageExit:{
            backgroundColor: '#444444',
            // filter: 'invert()',
            // opacity: 0,
            transform: ' translateY(100vh)'
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
