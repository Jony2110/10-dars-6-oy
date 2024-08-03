import styles from './card3.module.css'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Card3() {
  const { t, i18n } = useTranslation()
  useEffect(() => {
      const savedLanguage = localStorage.getItem('language') || 'en' 
      
      i18n.changeLanguage(savedLanguage)
  localStorage.setItem('language', savedLanguage  ) 
    }, [i18n])
   
  return (
   <div className={styles.bigBox}>
     <div className={styles.box1}>
        <img src="./img/LIST.svg" alt="" />
        <p>{t("fresh")}</p>
        <p>$12.00</p>
    </div>
    <div className={styles.box2}>
        <img src="./img/MORKOV.svg" alt="" />
        <p>{t("morkov")}</p>
        <p>$9.00</p>
    </div>
   </div>
  )
}

export default Card3