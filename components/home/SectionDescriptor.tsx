import styles from "./SectionDescriptor.module.scss";

const sectionDescriptor = (props: any) => {
  return (
    <div className={styles.sectionDescriptor}>
      <div className={styles.title}>
        <span></span>
        <h3>{props.title}</h3>
        <span></span>
      </div>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default sectionDescriptor;
