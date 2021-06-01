import styles from '../styles/ContactCard.module.css'
import {Avatar, Button} from 'antd'
import {MailFilled} from '@ant-design/icons'
import ContactDetails from './ContactDetails'
export default function ContactCard() {
    return (
        <div className={`${styles.card} card shadow-sm mx-auto p-2 my-4`}>
          <Avatar className=" mx-auto" shape="circle" 
          size={{ xs: 200, sm: 200, md: 250, lg: 250, xl: 250, xxl: 250}}
          src="/img/myimage.jpg" />
          <ContactDetails />
          <Button type="primary" 
            onClick={
              ()=>{
                window.open('mailto:theonlysamir@gmail.com')
              }
            }
          className={styles.button} icon={<MailFilled/>}>
              Send Email
          </Button>
        </div>
    )
}
