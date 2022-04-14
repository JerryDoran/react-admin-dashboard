import styles from "./Single.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

export default function Single() {
  return (
    <div className={styles.single}>
      <Sidebar />
      <div className={styles.singleContainer}>
        <Navbar />
        <div className={styles["top-wrapper"]}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className={styles.itemImage}
              />
              <div className={styles.details}>
                <h1 className={styles.itemTitle}>John Doe</h1>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Email:</span>
                  <span className={styles.itemValue}>johndoe@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Phone:</span>
                  <span className={styles.itemValue}>+1 2345 67 89</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Address:</span>
                  <span className={styles.itemValue}>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Country:</span>
                  <span className={styles.itemValue}>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Chart aspect={3 / 1} title="User Spending (last 6 months)" />
          </div>
        </div>
        <div className={styles["bottom-wrapper"]}>
          <h1 className={styles.title}>Latest Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}
