import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";

export default function AgentContainer({ character }) {
  return (
    <Link
      href={`/agents/${character.uuid}`}
      className={styles.container}
    >
      <Image
        src={character.displayIcon}
        alt={character.displayName}
        width={100}
        height={100}
      />
      <p>{character.displayName}</p>
    </Link>
  );
}
