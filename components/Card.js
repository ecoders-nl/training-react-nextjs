import Image from "next/image";
import styles from "../styles/Card.module.css";

function Card({ title, description, image, width, height }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt={title} width={width} height={height} />
    </div>
  );
}

export default Card;
