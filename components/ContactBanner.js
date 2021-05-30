import styles from '../styles/ContactBanner.module.css'
import {Typography} from 'antd'

const {Title} = Typography
export default function ContactBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <Title className="text-white text-center">
                    Contact
                </Title>
            </div>
        </div>
    )
}
