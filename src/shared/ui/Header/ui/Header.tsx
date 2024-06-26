import Logo from '@/shared/ui/Logo'
import React from 'react'
import Link from 'next/link'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className="flex items-center gap-2 cursor-pointer">
          <Logo
           
            alt="Logo"
          />
          <p className={styles.header_text}>
            Кафедра мехатроники и <br/> автоматизации технологических <br/> систем
          </p>
        </div>
      </Link>
    </header>
  )
}

export default Header
