import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import styles from "./styles/styles.module.css";

function App() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.body}>
        <div className={styles.cardBody}>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
