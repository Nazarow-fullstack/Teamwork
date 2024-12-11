import React from 'react'
import logo from '../../../public/yusuf/Слой 0 1.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl text-yellow-500"><Image width={100} alt='' src={logo} /></div>
            <nav className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-yellow-500">
                О компании
              </Link>
              <Link href="/" className="text-gray-700 hover:text-yellow-500">
                Объекты
              </Link>
              <Link href="/" className="text-gray-700 hover:text-yellow-500">
                Пресс-центр
              </Link>
              <Link href="/" className="text-gray-700 hover:text-yellow-500">
                Видео
              </Link>
              <Link href="/" className="text-gray-700 hover:text-yellow-500">
                Контакты
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <select className="border px-2 py-1 text-gray-700">
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <div className="font-bold text-gray-700">+38 (067) 822-85-58</div>
          </div>
        </div>
      </header>
  )
}

export default Header
