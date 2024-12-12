import Image from "next/image"
import sert from '@/assets/images/sert.png'

export default function Sertificat() {
    return(<>
    <section className="max-w-7xl m-auto bg-white px-[15px]">
        <h1 className="text-[45px] font-[600] xs:text-[30px]">НАШИ СЕРТИФИКАТЫ</h1>
        <div className="flex justify-evenly xs:grid xs:grid-cols-2 xs:gap-[20px]">
        <Image className="w-[220px] xs:w-[170px] xs:h-[260px] h-[328px]" src={sert} />
        <Image className="w-[220px] h-[328px] xs:w-[170px] xs:h-[260px]" src={sert} />
        <Image className="w-[220px] h-[328px] xs:w-[170px] xs:h-[260px]" src={sert} />
        <Image className="w-[220px] h-[328px] xs:w-[170px] xs:h-[260px]" src={sert} />
        <Image className="w-[220px] h-[328px] xs:w-[170px] xs:h-[260px]" src={sert} />
        </div>
    </section>
    </>)
}