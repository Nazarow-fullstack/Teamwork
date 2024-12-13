import Image from "next/image"
import mst from '@/assets/images/mst.png'
import baner from './baner.module.css'

export default function Baner() {
    return(<>
    <section className={baner.bbb}>
    <span className="text-center m-auto pb-[25px] xs:px-[15px]">Главная / О компании</span>
    <section className="max-w-7xl m-auto flex h-[650px] bg-white items-center justify-between mt-[20px] xs:block xs:h-[800px]">
        <div className="w-[50%] xs:w-[100%]">
<div className="flex gap-[20px]">
<div className="bg-[#FEAD04] pl-[70px] py-[10px] pr-[20px] text-left text-white">
                <p className="text-[20px] font-[600]">Верещинский Александр Павлович</p>
                <p className="text-[17px] font-[200]">Основатель компании, доктор технических наук</p>
            </div>
            <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.5V33.5L16.5 17V0.5H0Z" fill="#FEAD04"/>
<path d="M27.5 0.5V33.5L44 17V0.5H27.5Z" fill="#FEAD04"/>
</svg>
</div>
            <p className="mt-[100px] font-[100] text-[30px] text-left ml-[50px]">Наши знания и возможности для Вас <br /> открыты и доступны. Рады будем принимать <br /> Вас в нашей компании и в нашем городе.</p>
            <span className="text-[25px] text-[#FEAD04] font-[500] text-left ml-[50px]">с Уважением, Верещинский Александр Павлович</span>
        </div>
        <div className="w-[45%] xs:w-[100%]">
        <Image className="w-[100%]" src={mst} />
        </div>
    </section>
    </section>
    </>)
}