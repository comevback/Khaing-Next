import styles from './experience.module.css';

const Experience = () => {
    return (
        <section className={styles.experience}>
            <h1 className={styles.title}>Professional Experience</h1>
            <hr></hr>
            
            
            <div className={styles.experienceGroup}>
                <h3 className={styles.subtitle}>Full Time</h3>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Academic Executive & Lecturer</div>
                    <div className={styles.company}>Academic Department, Thate Pan Institute, Myanmar</div>
                    <div className={styles.date}>2022/02-2023/5</div>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Assistant Project Manager</div>
                    <div className={styles.company}>IT Department, Mandalay City Development Committee, Myanmar</div>
                    <div className={styles.date}>2019/01-2021/04</div>
                </div>
            </div>
            
            
            <div className={styles.experienceGroup}>
                <h3 className={styles.subtitle}>Part Time</h3>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Research Assistant</div>
                    <div className={styles.company}>Department of Electrical and Communication Engineering, Okayama University, Japan</div>
                    <div className={styles.date}>2022/07-2023/3</div>
                </div>
            </div>
            
            
            <div className={styles.experienceGroup}>
                <h3 className={styles.subtitle}>Volunteer</h3>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Core Member</div>
                    <div className={styles.company}>Women in AI (Myanmar Chapter), Women in AI</div>
                    <div className={styles.date}>2020/12-current</div>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Computer Science Teacher</div>
                    <div className={styles.company}>Academic Department, Thate Pan Hub, Myanmar</div>
                    <div className={styles.date}>2021/01-2022/10</div>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.role}>Leader</div>
                    <div className={styles.company}>Data Science and Machine Learning Club (UTYCC)</div>
                    <div className={styles.date}>2019/06-2020/06</div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
