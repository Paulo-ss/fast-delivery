import { FC, useEffect } from "react";
import styles from "./Notification.module.scss";
import { motion, useAnimation } from "framer-motion";

interface Props {
  notification: {
    message: string;
    color: "success" | "info" | "danger";
  };
}

const Notification: FC<Props> = ({ notification }) => {
  const animation = useAnimation();

  useEffect(() => {
    animation.start({
      translateX: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.8 },
    });

    setTimeout(() => {
      animation.start({
        translateX: 100,
        opacity: 0,
        pointerEvents: "none",
        transition: { type: "spring", duration: 0.8 },
      });
    }, 3000);
  }, [animation]);

  return (
    <motion.div
      className={`${styles.notification} ${styles[notification.color]}`}
      initial={{ translateX: 100, opacity: 0 }}
      animate={animation}
    >
      {notification.message}
    </motion.div>
  );
};

export default Notification;
