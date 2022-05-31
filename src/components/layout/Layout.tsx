import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ShapeDivider from "../util/shapeDivider/ShapeDivider";
import Container from "./container/Container";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Container>
        <Header />

        <ShapeDivider />

        <main className={styles.main}>{children}</main>

        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
