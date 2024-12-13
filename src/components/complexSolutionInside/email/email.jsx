import email from './email.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export default function Email() {
    return (<>
    <section className={email.em}>
     <div className='max-w-7xl m-auto flex py-[45px] items-center xs:block'>
        <div className='w-[50%] xs:w-[100%]'>
            <Image className='w-[85%] m-auto' src={logo} alt='' />
        </div>
        <div className='bg-white px-[65px] py-[20px]'>
            <h5 className='text-[35px] font-[100]'><span className='font-[600]'>Ф</span>ОРМА ОБРАТНОЙ СВЯЗИ</h5>
            <h6 className='text-[24px] font-[100]'>Заполните форму и мы свяжемся с вами</h6>
           <div className='w-[100%] my-[30px]'>
           <div className='flex gap-[5px] xs:block'>
                <div className='w-[50%] grid grid-cols-1 gap-[10px] xs:w-[100%]'>
                    <span className='ml-[10px]'>Имя</span>
                    <span className='w-[100%] h-[2px] bg-black'></span>
                </div>
                <div className='w-[50%] grid grid-cols-1 gap-[10px] xs:w-[100%]'>
                    <span className='ml-[10px]'>Телефон</span>
                    <span className='w-[100%] h-[1px] bg-gray-600'></span>
                </div>
            </div>
           <div className='w-[100%] grid grid-cols-1 gap-[10px] mt-[10px]'>
           <span>E-mail</span>
            <span className='w-[100%] h-[1px] bg-gray-600'></span>
           </div>
           </div>
            <button className='bg-[#FEAD04] text-white px-[45px] py-[10px] text-[15px]'>Оставить заявку</button>
        </div>
     </div>
    </section>
    </>)
}