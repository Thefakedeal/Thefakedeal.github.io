import styles from '../styles/ContactCard.module.css'
import {Avatar, Button} from 'antd'
import {MailFilled} from '@ant-design/icons'
import ContactDetails from './ContactDetails'
export default function ContactCard() {
    return (
        <div className={`${styles.card} card shadow-sm mx-auto p-2 my-4`}>
          <Avatar className="m-4" shape="circle" 
          size={{ xs: 200, sm: 200, md: 250, lg: 250, xl: 250, xxl: 250}}
          src="/img/myimage.jpg" />
          <ContactDetails />
          <a className="text-decoration-none" href="mailto:theonlysamir@gmail.com" target="__blank"> 
            <Button type="primary" className={styles.button} icon={<MailFilled/>}>
                Send Email
            </Button>
          </a>
        </div>
    )
}
