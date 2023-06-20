import Image from "next/image";

import styles from "./CardMod.module.scss";

type ModProp = {
  src: string;
  title: string;
  description: string;
  alternate: Boolean;
};

const CardMod = (props: ModProp) => {
  const alternate = props.alternate;

  return (
    <>
      {!alternate && (
        <div className={styles.card}>
          <div className={styles.propic}>
            <Image
              src={props.src}
              fill={true}
              objectFit={"cover"}
              className={styles.wallpaper}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.desc}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
        </div>
      )}
      {alternate && (
        <div className={styles.cardAlt}>
          <div className={styles.desc}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          <div className={styles.propic}>
            <Image
              src="/survival.jpg"
              fill={true}
              objectFit={"cover"}
              className={styles.wallpaper}
              alt="Picture of the author"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardMod;
