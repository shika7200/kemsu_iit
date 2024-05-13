import Logo from '@/ui/Logo'
import React from 'react'

const Header = () => {
  return (
    <header className="flex gap-2 self-stretch text-xl">
    <Logo
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e087343d795364413d28020d126242728bfc985ca97ed0353d51451b8a5fb6?apiKey=131927e4f4ff43de8c424c10066bcbdc&"
      alt="Logo"
    />
    <p className="flex-auto my-auto">
      Кафедра мехатроники и автоматизации технологических систем
    </p>
  </header>
  )
}

export default Header