import styles from '../styles/FlipCard.module.css'

const FlipCard = ({children,style, ...props}) => {
    return (
        <div className={styles.container} style={style} {...props} >
            <div className={styles.inner}>
              {children}
            </div>
        </div>
    )
}

FlipCard.Front = ({children,style,...props})=>{
    return (
        <div className={styles.front} style={style} {...props} >
            {children}
        </div>
    )
}

FlipCard.Back = ({children, style,...props})=>{
    return (
        <div className={styles.back} style={style}  {...props}>
            {children}
        </div>
    )
}

export default FlipCard;