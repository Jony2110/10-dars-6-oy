import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './headers.module.css'

function Header() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    i18n.changeLanguage(savedLanguage)
  }, [i18n])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleChangeLanguage(event) {
    const newLanguage = event.target.value
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  function handleChangeTheme(event) {
    setTheme(event.target.value)
  }

  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.box1}>
        <img src="./public/img/LOGO.svg" alt="" />
      </div>
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#">{t("home")}</a></li>
          <li className={styles.li}><a href="#">{t("kategory")}</a></li>
          <li className={styles.li}><a href="#">{t("sales")}</a></li>
          <li className={styles.li}><a href="#">FAQ</a></li>
          <li className={styles.li}><a href="#">{t("about")}</a></li>
          <li className={styles.li}><a href="#">{t("contact")}</a></li>
        </ul>
      </div>
      <div className={styles.selectBox}>
        <select onChange={handleChangeLanguage} defaultValue={localStorage.getItem('language') || 'en'}>
          <option value="ru">Русский</option>
          <option value="uz">Ўзбек</option>
          <option value="en">English</option>
        </select>
        <select onChange={handleChangeTheme} defaultValue={theme}>
          <option value="light">{t("theme")}</option>
          <option value="dark">{t("themeDark")}</option>
        </select>
      </div>
    </div>
  )
}

export default Header