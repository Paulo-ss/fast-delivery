import { FC } from "react";
import { Data } from "../../interfaces/Interfaces";
import styles from "./SearchResult.module.scss";
import { motion } from "framer-motion";

interface Props {
  product: Data;
}

const SearchResult: FC<Props> = ({ product }) => {
  return (
    <motion.div
      className={styles.searchResult}
      transition={{ type: "spring", duration: 0.8 }}
      initial={{ translateX: -50, opacity: 0 }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      exit={{ translateX: -50, opacity: 0 }}
    >
      <div className={styles.searchResultContainer}>
        <div className={styles.packageImage}>
          <img
            src={product.imageSrc}
            alt={`Imagem do produto ${product.name}`}
          />
        </div>

        <div className={styles.packageInfo}>
          <h3>Nome: {product.name}</h3>
          <p>Tipo de Entrega: {product.deliveryType}</p>
          <p>Status: {product.status}</p>
          <p>Código de Rastreio: {product.trackingCode}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchResult;
