import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import styles from './card4.module.css'
function Card4() {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en' 
        
        i18n.changeLanguage(savedLanguage)
    localStorage.setItem('language', savedLanguage  ) 
      }, [i18n])
     
  return (
    <div className={styles.boxWrap} >
        <div>
        <img src="./img/CARD1.svg" alt="7897897897987" />
        <h2>{t("moloko")}</h2>
        <p>{t("lorem")}</p>
    </div>
    <div>
        <img src="./img/CARD2.svg" alt="7897897897987" />
        <h2>{t("meva")}</h2>
        <p>{t("lorem")}</p>
    </div>
    <div>
        <img src="./img/CARD3.svg" alt="7897897897987" />
        <h2>{t("zira")}</h2>
        <p>{t("lorem")}</p>
    </div>
    <div>
        <img src="./img/CARD4.svg" alt="7897897897987" />
        <h2>{t("honey")}</h2>
        <p>{t("lorem")}.</p>
    </div>
    <div>
        <img src="./img/CARD5.svg" alt="7897897897987" />
        <h2>{t("flour")}</h2>
        <p>{t("lorem")}</p>
    </div>

    </div>
  )
}

export default Card4