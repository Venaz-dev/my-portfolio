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
        transition={{ duration: 1, type: "spring", stiffness: 150}}
        variants={{
          pageInitial: {
            // opacity: 0,
            transform: 'scale(0.5)',
            
            
          },
          pageAnimate: {
            opacity: 1,
            transform: 'scale(1)'
          },
          pageExit:{
            // backgroundColor: 'white',
            // filter: 'invert()',
            // opacity: 0,
            transform: 'scale(0.5)'
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
