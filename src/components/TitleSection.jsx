import styles from "@/app/style";

const TitleSection = ({ titleSection, paragraph }) => (
  <>
    <h1 className={styles.heading2}>{titleSection}</h1>
    <p className={styles.paragraph}>{paragraph}</p>
  </>
);

export default TitleSection;
