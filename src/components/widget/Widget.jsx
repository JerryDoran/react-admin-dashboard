import styles from "./Widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export default function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className={styles.icon}
            style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, .2)" }}
          />
        )
      };
      break;
    case "order":
      data = {
        title: "orders",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={styles.icon}
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165 , 32, .2)"
            }}
          />
        )
      };
      break;
    case "earnings":
      data = {
        title: "earnings",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={styles.icon}
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, .2)" }}
          />
        )
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className={styles.icon}
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, .2)"
            }}
          />
        )
      };
      break;
    default:
      break;
  }

  const checked = true;
  const color = checked ? styles.positive : styles.negative;
  return (
    <div className={styles.widget}>
      <div className={styles.leftWrapper}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}>
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.rightWrapper}>
        <div className={`${styles.percent} ${color}`}>
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
