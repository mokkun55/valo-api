import Image from "next/image";
import styles from "./style.module.css";

export default function AgentContainer({ character }) {
  return (
    <div className={styles.container}>
      <Image
        src={character.displayIcon}
        alt={character.displayName}
        width={100}
        height={100}
      />
      <p>{character.displayName}</p>
    </div>
  );
}
