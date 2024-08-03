import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './cars1.module.css'

function Card1() {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en' 
        
        i18n.changeLanguage(savedLanguage)
    localStorage.setItem('language', savedLanguage  ) 
      }, [i18n])
      function handleSubmit(event) {
        event.preventDefault();
      }
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>{t("title")}</h1>
        <p className={styles.p}>{t("info")}</p>
        <form>
            <input className={styles.input} type="text" placeholder={t("input")} />
            <button onClick={handleSubmit}><img src="./img/Search.svg" alt="" /></button>
        </form>
        <div className={styles.boxses}>
        <div className={styles.miniBox}>
            <img src="./img/Vector.svg" alt="" />
            <p>{t("vege")}</p>
        </div>
        <div className={styles.miniBox}>
            <img src="./img/Vector.svg" alt="" />
            <p>100% {t("garant")}</p>
        </div>
        <div className={styles.miniBox}>
            <img src="./img/Vector.svg" alt="" />
            <p>{t("buy")}</p>
        </div>
        <div className={styles.miniBox}>
            <img src="./img/Vector.svg" alt="" />
            <p>{t("fast")}</p>
        </div>
        </div>
    </div>
  )
}

export default Card1