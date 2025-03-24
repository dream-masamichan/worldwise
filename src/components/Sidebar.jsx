import React from 'react'
import AppNav from './AppNav'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear} by WorldSiWise Inc.
      </p>
    </div>
  )
}

export default Sidebar
