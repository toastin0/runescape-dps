import react from "react";
import Image from "next/image";
import styles from "./Prayer.module.css";

export default function Prayer({
  src,
  isActive = false,
  alt,
  onPress,
}: {
  src: string;
  isActive?: boolean;
  alt: string;
  onPress?: () => void;
}) {
  return (
    <div onClick={onPress}>
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className={
          !isActive
            ? styles.prayerimage
            : `${styles.prayerimage} ${styles.clicked}`
        }
      />
    </div>
  );
}
