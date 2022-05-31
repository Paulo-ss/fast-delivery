import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ translateX: -50, opacity: 0 }}
      animate={{
        translateX: 0,
        opacity: 1,
        transition: { type: "spring", duration: 0.8 },
      }}
    >
      <div className={styles.logo}>
        Fast<span>Delivery</span>
      </div>

      <h3>
        Pesquise o status da sua encomenda no serviço de entrega mais rápido do
        pais!
      </h3>
    </motion.header>
  );
};

export default Header;
