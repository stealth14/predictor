import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
}
