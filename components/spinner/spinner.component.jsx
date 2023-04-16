import CircularProgress from "@mui/material/CircularProgress";

import styles from "./spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Spinner;
