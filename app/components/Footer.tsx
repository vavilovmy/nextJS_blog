import React from 'react'
import styles from "../../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Привет!</p>
      <p><a href='https://devportfolio-tau-weld.vercel.app/' target='_blank'>Мое портфолио</a></p>
      <div className={styles.socials}>
         <a href='https://www.github.com/vavilovmy' target='_blank'>
         <img src="github.png" width="30px" height="30px" alt="github" />
         </a>
         <a href='https://t.me/vavilovmy' target='_blank'>
         <img src="telegram.svg" width="30px" height="30px" alt="telegram" />
         </a>
      </div>
    </footer>
  )
}

export default Footer
