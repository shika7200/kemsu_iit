import Logo from '@/ui/Logo'
import React from 'react'
import Link from 'next/link'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className="flex items-center gap-2 cursor-pointer">
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e087343d795364413d28020d126242728bfc985ca97ed0353d51451b8a5fb6?apiKey=131927e4f4ff43de8c424c10066bcbdc&"
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
