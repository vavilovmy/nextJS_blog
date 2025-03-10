"use client"
import React from 'react'
import styles from "../../styles/Header.module.css";
import { useState } from "react";
import Link from 'next/link';

const Header = () => {
   // const [theme, setTheme] = useState('white');
   
  return (
    <header className={styles.header}>
      
      <nav>
      <img 
       src="logo.svg"
      />
      <ul>
         <li><Link href="/">Главная</Link></li>
         <li><Link href="/posts">Посты</Link></li>
      </ul>
      </nav>
      <div className={styles.header__button}><input type='checkbox'></input></div>
      
    </header>
  )
}

export default Header
