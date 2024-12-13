import React from 'react'
import logo from '../../../public/yusuf/Слой 0 1.png'
import Image from 'next/image'
import map from '../../../public/yusuf/Mask Group (7).png'

const contact = () => {
  return (
    <div className='mt-[30]'>
      <p className='text-center text-[40px]'>Контакты</p>

      <div className="flex flex-wrap  items-start p-10 min-h-screen">
      
      <div className="w-full lg:w-1/2 px-5">
        <h2 className="text-2xl font-bold mb-5">Будем рады знакомству</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="text-yellow-500 font-bold">+38 (067) 822-85-58</span> — Телефон
          </li>
          <li>
            <span className="text-yellow-500 font-bold">+38 (093) 702-59-59</span> — Запчасти для очистки
          </li>
          <li>
            <span className="text-yellow-500 font-bold">+38 (067) 571-49-09</span> — «Зерно» / «Обработать оборудование»
          </li>
          <li>
            <span className="text-yellow-500 font-bold">+38 (095) 793-55-65</span> — Общие вопросы
          </li>
          <li>
            <span className="text-yellow-500 font-bold">+38 (067) 289-28-74</span> — Отдел продаж
          </li>
        </ul>
        <div className="mt-5">
          <p className="mb-2">
            <strong>Почта:</strong> <span className="text-yellow-500">olis@ukr.net</span>
          </p>
          <p className="mb-2">
            <strong>Сайт:</strong> <span  className="text-yellow-500">olis.ua</span>
          </p>
          <p className="mb-2">
            <strong>Рабочие часы:</strong> <span>8:00 — 17:00</span>
          </p>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full h-96 ">
          <Image height={600} src={map} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
              <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">📍</span>
              </div>
              <p className="text-gray-800 mt-2">Столбовая ул, 28, Одесса</p>
            </div>
          </div>
        </div>
      </div>
    </div>



      <div className="flex flex-wrap items-center p-[30px] mt-[60px] mb-[50px] bg-cover bg-left bg-[gray]"
         style={{ backgroundImage: "url('../../public/yusuf/field-of-wheat-73HJPPP 1.png')" }}>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="text-white text-center p-5">
          <Image src={logo} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white p-10 shadow-lg">
        <h2 className="text-2xl font-bold mb-5">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
        <p className="mb-5">Заполните форму и мы свяжемся с вами</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Телефон</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Введите ваш телефон"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Введите ваш email"
            />
          </div>
          <button
            
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default contact
