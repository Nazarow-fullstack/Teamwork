import Image from 'next/image'
import React from 'react'
import first from '../../public/yusuf/zavod OLIS viveska 1.png'
import gandm from '../../public/yusuf/XMLID 53.png'
import bochka from '../../public/yusuf/ОПТИМАТИК-К-30 1.png'
import mask from '../../public/yusuf/Mask Group.jpg'
import big from '../../public/yusuf/image 20.png'
import country from '../../public/yusuf/Group (1).png'
import sponser from '../../public/yusuf/logo 34 (1).png'
import man from '../../public/yusuf/Mask Group.png'
import logo from '../../public/yusuf/Слой 0 1.png'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
   

      <main className="flex flex-col lg:flex-row container mx-auto py-10 px-6">
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-yellow-500 text-4xl font-bold">
            ТЕХНОЛОГИИ И ОБОРУДОВАНИЕ
          </h1>
          <p className="text-gray-700 text-xl mt-4">
            для очистки, переработки и контроля качества зерна
          </p>
          <button className="mt-6 bg-yellow-500 text-white py-2 px-2 w-[200px] rounded hover:bg-yellow-600">
            Оставить заявку
          </button>
        </div>

      
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
            
            <Image src={first} alt='' />
          </div>
        </div>
      </main>
    </div>

    <div className='w-[90%] m-auto'>
    <div className='mt-[50px]'>
      <p className='text-[50px]'>Наше оборудование</p>

      <div className='flex flex-wrap justify-between gap-10'>


        <div className='q w-[400px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
        <div className='q w-[400px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center items-center'>
            <div className='bg-gray-400 flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} alt='' />
        </div>
      </div>


    </div>

    <p className='text-[50px]'>КОМПЛЕКСНЫЕ РЕШЕНИЯ</p>
    <div  className='flex flex-wrap justify-between gap-'>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>
        <div className='q w-[500px]  h-[200px] flex  justify-center '>
            <div className='bg-[#FEAD04] flex w-[300px] h-[60px] gap-[30px] mt-[50px]'>
              <Image className='w-[50px] h-[50px]' src={gandm} alt='' />
              <p>Зерноочистительное оборудование</p>
            </div>
            <Image src={bochka} width={300} className='h-[150px] mt-[40px]' alt='' />
        </div>

    </div>



      <p className='text-[50px]'>Услуги</p>
      <div  className='flex flex-wrap gap-[20px]'>

      <div className='b w-[480px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      <div className='b w-[480px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      <div className='b w-[480px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      <div className='b w-[480px] mt-[30px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      <div className='b w-[480px] mt-[30px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      <div className='b w-[480px] mt-[30px] h-[150px] flex justify-center items-end'>
          <p className='bg-white h-[40px] w-[200px] text-center pt-[10px] text-[20px]'>Монтаж</p>
      </div>
      </div>


      <div className='mt-[100px]'>
        {/* <p className='text-center text-[50px]'>Преимущества</p> */}
        <div className='flex flex-wrap justify-evenly'>
          <div className='w-[700px]'>
            <p className='text-[40px]'>О нас</p>
            <p className='text-[16px] text-gray-400 mt-[20px]'>Лидер зерноочистительного оборудования в Украине. 
Наша компания специализируется в разработке, производстве и внедрении в промышленность технологий и оборудования для переработки зерна. Сегодня мы обладаем оригинальными современными технологиями и оборудованием по всем основным направлениям очистки зерна, производства муки и крупы, что подтверждается более чем 30-ю патентами в указанной области. ООО «ОЛИС» выпускает около 200-т наименований оборудования и располагает возможностью производства различных зерноочистительных комплексов, мельниц и крупоцехов от этапа разработки до ввода в эксплуатацию.
</p>
<button className='mt-[20px] px-[20px] py-[10px] bg-[#FEAD04] text-white'>Скачать каталог</button>
          </div>
          <Image src={big} width={600} alt='' />
        </div>
        <div className='flex flex-wrap justify-evenly mt-[50px]'>
          <Image src={country} width={600} alt='' />
          <div className='w-[700px]'>
            <p className='text-[40px]'>В каких странах мы работаем</p>
            <p className='text-[16px] text-gray-400 mt-[20px]'>
            Технологический уровень и организация нашего производства позволяет обеспечить высокое качество изделий по убедительным ценам и поставлять их более чем в 30 стран ближнего и дальнего зарубежья.
            </p>
<button className='mt-[20px] px-[20px] py-[10px] bg-[#FEAD04] text-white'>Открыть карту готовых проектов</button>
          </div>
        </div>
      </div>


      <div className='flex justify-evenly flex-wrap bg-slate-500 py-[20px] mt-[50px] gap-[20px]'>
        <Image src={sponser} alt='' />
        <Image src={sponser} alt='' />
        <Image src={sponser} alt='' />
        <Image src={sponser} alt='' />
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



      <div className='mt-[50px] flex flex-wrap justify-evenly'>
        <div className='flex flex-wrap gap-[20px]'>
          <Image src={man} alt='' />
          <div className='w-[300px]'>
            <p className='text-[20px]'>Компания ОЛИС запустила в Турции завод </p>
            <p className='mt-[16px] text-gray-600'>Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев</p>

            <button className='mt-[30px] text-[#FEAD04]'>Читать подробнее</button>
          </div>
        </div>
        <div className='flex flex-wrap gap-[20px]'>
          <Image src={man} alt='' />
          <div className='w-[300px]'>
            <p className='text-[20px]'>Компания ОЛИС запустила в Турции завод </p>
            <p className='mt-[16px] text-gray-600'>Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев</p>

            <button className='mt-[30px] text-[#FEAD04]'>Читать подробнее</button>
          </div>
        </div>
        <div className='flex flex-wrap gap-[20px]'>
          <Image src={man} alt='' />
          <div className='w-[300px]'>
            <p className='text-[20px]'>Компания ОЛИС запустила в Турции завод </p>
            <p className='mt-[16px] text-gray-600'>Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев</p>

            <button className='mt-[30px] text-[#FEAD04]'>Читать подробнее</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
