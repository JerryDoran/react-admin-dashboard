import styles from "./New.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export default function New({ inputs, title }) {
  const [file, setFile] = useState("");

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <Navbar />
        <div className={styles["top-container"]}>
          <h1>{title}</h1>
        </div>
        <div className={styles["bottom-container"]}>
          <div className={styles.leftContainer}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className={styles.image}
            />
          </div>
          <div className={styles.rightContainer}>
            <form>
              <div className={styles.formControl}>
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className={styles.icon} />
                </label>
                <input
                  id="file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className={styles.formControl} key={input.id}>
                  <label>
                    <span>{input.label}</span>
                    <input type={input.type} placeholder={input.placeholder} />
                  </label>
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
