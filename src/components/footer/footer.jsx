import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-white py-10 border-t">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-yellow-500">ОЛИС</div>
            <p className="text-sm text-gray-500">
              © 2021 ООО «ОЛИС». Все права защищены.
            </p>
            <a href="#" className="text-yellow-500 hover:underline">
              Карта сайта
            </a>
          </div>
  
          <div className="space-y-2">
            <p className="font-semibold">Подпишись на рассылку</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 px-4 py-2 rounded-l w-full focus:outline-none"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r">
                →
              </button>
            </div>
          </div>
  
          <div className="space-y-2">
            <p className="font-semibold">Наша компания</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Отзывы о компании
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Новинки компании
                </a>
              </li>
            </ul>
          </div>
  
          <div className="space-y-2">
            <p className="font-semibold">Пресс-центр</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Статьи
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Выставки
                </a>
              </li>
            </ul>
          </div>
  
          <div className="space-y-2">
            <p className="font-semibold">Контакты</p>
            <ul className="space-y-1 text-gray-700">
              <li>Телефон: +38 (067) 822-85-58</li>
              <li>Звонки из СНГ: +7 (831) 288-93-74</li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:olis@ukr.net"
                  className="text-yellow-500 hover:underline"
                >
                  olis@ukr.net
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@olis.com.ua"
                  className="text-yellow-500 hover:underline"
                >
                  info@olis.com.ua
                </a>
              </li>
              <li>Время работы: с 8:00 - до 17:00</li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer
