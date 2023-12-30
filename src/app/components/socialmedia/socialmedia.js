import { Nav, NavLink } from 'react-bootstrap';

export default function SocialMedia() {
    return (
        <Nav>
            <NavLink href='https://www.facebook.com/DoctorWho' target="_blank">
                <img
                src='./assets/img/icons/facebook.svg'
                className='d-inline-block align-top'
                alt='Facebook de Doctor Who'
                />
            </NavLink>
            <NavLink href='https://twitter.com/bbcdoctorwho' target="_blank">
                <img
                src='./assets/img/icons/simple-icons_x.svg'
                className='d-inline-block align-top'
                alt='Red Social X de Doctor Who'
                />
            </NavLink>
            <NavLink href='https://www.instagram.com/bbcdoctorwho/' target="_blank">
                <img
                src='./assets/img/icons/mdi_instagram.svg'
                className='d-inline-block align-top'
                alt='Instagram de Doctor Who'
                />
            </NavLink>
            <NavLink href='https://www.tiktok.com/@doctorwho' target="_blank">
                <img
                src='./assets/img/icons/ic_baseline-tiktok.svg'
                className='d-inline-block align-top'
                alt='TikTok de Doctor Who'
                />
            </NavLink>
      </Nav>
    )
};