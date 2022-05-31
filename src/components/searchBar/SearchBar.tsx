import styles from "./SearchBar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import validateTrackingCode from "../../util/validateTrackingCode";
import useFetch from "../../hooks/useFetch";
import SearchResult from "../searchResult/SearchResult";
import Loading from "../util/loading/Loading";
import Notification from "../util/notifications/Notification";

const SearchBar = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const { data, loading, error, getProduct, resetData, resetError } =
    useFetch();

  useEffect(() => {
    const isCodeValid = validateTrackingCode(trackingCode);

    if (isCodeValid === undefined || isCodeValid === null) {
      resetData();
      resetError();
      return;
    }

    if (
      isCodeValid &&
      (!data || data.trackingCode !== Number(trackingCode)) &&
      !error
    ) {
      const fetchData = async () => {
        await getProduct(Number(trackingCode));
      };

      fetchData();
    }
  }, [trackingCode, getProduct, resetData, data, resetError, error]);

  const handleChange = async (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const regexp = new RegExp(/^[0-9]*$/g);

    if (!regexp.test(value)) {
      e.preventDefault();
      return;
    }

    setTrackingCode(value);
  };

  return (
    <>
      <motion.form
        className={styles.searchBarForm}
        initial={{ translateX: -50, opacity: 0 }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: { type: "spring", duration: 0.8, delay: 0.4 },
        }}
      >
        <div className={styles.searchBarContainer}>
          <input
            className={styles.searchBar}
            type="text"
            name="trackingCode"
            id="trackingCode"
            maxLength={4}
            placeholder="Código de rastreio (Ex: 1784)"
            value={trackingCode}
            onChange={handleChange}
          />
          <span className="material-symbols-outlined">search</span>
        </div>
      </motion.form>

      {loading && <Loading />}

      <AnimatePresence>
        {data && <SearchResult product={data} />}
      </AnimatePresence>

      {!loading && error && (
        <Notification notification={{ message: error, color: "danger" }} />
      )}
    </>
  );
};

export default SearchBar;
