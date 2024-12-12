import baner from './baner.module.css'
import Image from 'next/image'
import banerb from '@/assets/images/banerb.jpg'

export default function Baner() {
    return(<>
    <section className={baner.banere}>
     <div className='w-[50%] xs:w-[100%]'>
            <Image className='w-[100%]' src={banerb} alt="" />
        </div>
        <div className='w-[50%] xs:w-[100%] xs:mt-[25px]'>
            <div className='ml-[25px]'>
            <span className='text-[14px] font-[100] block'>Главная / Комплексные решения / </span> 
            <span className='text-[14px] font-[700] block'>Зерноочистительные комплексы</span>
           <h3 className='text-[65px] font-[700] leading-[75px] xs:text-[30px] xs:leading-[35px]'>Зерноочистительные <br /> комплексы</h3>
           <p className='text-[16px] font-[100] py-[25px]'>Послеуборочная очистка является обязательным звеном производства зерна. <br /> Эффективность этого процесса прямо влияет на эффективность <br /> последующих операций (сушка, хранение, переработка) и во многом <br /> определяет результаты всего производства.</p>
           <p className='text-[16px] font-[100]'>Зерновой ворох, поступающий на послеуборочную очистку, представляет <br /> собой смесь полноценного, щуплого и поврежден­ного зерна основной <br /> культуры, семян различных культурных и сорных растений, а также примесей <br /> частиц растений, соломы, колосьев, половы, песка, комочков земли и др. При <br /> этом содер­жание примесей в зерне основной культуры может составлять от <br /> 2-х до 15-ти %,</p>
     
            </div>
              </div>
    </section>
    </>)
}