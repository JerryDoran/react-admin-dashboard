import styles from "./Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/modeContext";

export default function Sidebar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className={`${styles.sidebar} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.top}>
        <Link to="/" className={styles.link}>
          <span className={`${styles.logo} ${darkMode ? styles.dark : ""}`}>
            admin
          </span>
        </Link>
      </div>
      <div className={styles.center}>
        <ul className={`${styles.menuList} ${darkMode ? styles.dark : ""}`}>
          <p className={styles.title}>main</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>lists</p>
          <li>
            <Link to="/users">
              <GroupIcon className={styles.icon} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <InventoryOutlinedIcon className={styles.icon} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <CreditCardOutlinedIcon className={styles.icon} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Deliveries</span>
          </li>
          <p className={styles.title}>useful links</p>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>service</p>
          <li>
            <LocalHospitalOutlinedIcon className={styles.icon} />
            <span>System</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>user</p>
          <li>
            <AccountCircleIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div
          className={`${styles.colorOption} ${darkMode ? styles.dark : ""}`}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={`${styles.colorOption} ${darkMode ? styles.dark : ""}`}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
