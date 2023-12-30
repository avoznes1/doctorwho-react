import styles from '../footer/footer.module.css';

import SocialMedia from '../socialmedia/socialmedia';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.footerIcons}>
                <div>
                    <img
                        src='./assets/img/logos/logo-cadena.png'
                        className={styles.logoChain}
                        alt='Logo de cadena de Doctor Who'
                    />
                </div> 
                <div className={styles.social}>
                    <SocialMedia />
                </div>
            </div>
        </footer>
    );
};