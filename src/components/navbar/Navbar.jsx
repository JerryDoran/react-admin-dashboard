import styles from "./Navbar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/modeContext";
import { useContext } from "react";

export default function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlinedIcon />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon />
          </div>
          <div className={styles.item}>
            <img
              src="https://w0.peakpx.com/wallpaper/275/3/HD-wallpaper-mario-cartoon-plumber-red-neon-lights-super-mario-creative-super-mario-characters-super-mario-bros-mario-super-mario.jpg"
              alt=""
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
