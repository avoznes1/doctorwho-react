import styles from './socialmedia.module.css';

export default function SocialMedia() {
    return (
        <div className={styles.socialIcons}>
            <div href='https://www.facebook.com/DoctorWho' target="_blank">
                <img
                src='./assets/img/icons/facebook.svg'
                className='d-inline-block align-top'
                alt='Facebook de Doctor Who'
                />
            </div>
            <div href='https://twitter.com/bbcdoctorwho' target="_blank">
                <img
                src='./assets/img/icons/simple-icons_x.svg'
                className='d-inline-block align-top'
                alt='Red Social X de Doctor Who'
                />
            </div>
            <div href='https://www.instagram.com/bbcdoctorwho/' target="_blank">
                <img
                src='./assets/img/icons/mdi_instagram.svg'
                className='d-inline-block align-top'
                alt='Instagram de Doctor Who'
                />
            </div>
            <div href='https://www.tiktok.com/@doctorwho' target="_blank">
                <img
                src='./assets/img/icons/ic_baseline-tiktok.svg'
                className='d-inline-block align-top'
                alt='TikTok de Doctor Who'
                />
            </div>
      </div>
    )
};