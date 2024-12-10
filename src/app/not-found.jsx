import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return <>
    <div className='max-w-[1600px] h-screen font-sans mx-auto justify-center text-center flex flex-col items-center'>
        <Image src="/NotFound.png" width={1000} height={0} className='w-[40%]' alt='' />
        <div className="flex flex-col items-center justify-center mt-[150px] bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-black mb-4">
        ЗАПРОШЕННАЯ ВАМИ СТРАНИЦА НЕ НАЙДЕНА
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Мы просим прощения за доставленные неудобства и предлагаем следующие пути:
      </p>
      <ul className="text-left text-gray-800 mb-8">
        <li>🔄 Вернуться при помощи кнопки браузера или по этой ссылке</li>
        <li>🔍 Проверить правильность написания адреса страницы (URL)</li>
        <li>🏠 Перейти на главную страницу сайта</li>
      </ul>
      <a
        href="/"
        className="py-[15px] px-[100px] bg-[#FEAD04] text-white font-medium rounded hover:bg-orange-500 transition"
      >
        На главную
      </a>
    </div>
    </div>
  </>
}

export default NotFound