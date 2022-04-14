import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import Widget from "../../components/widget/Widget";
import FearturedChart from "../../components/featured/FeaturedChart";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

export default function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={styles.charts}>
          <FearturedChart />
          <Chart aspect={3 / 1} title="Revenue (last 6 months)" />
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["list-title"]}>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}
