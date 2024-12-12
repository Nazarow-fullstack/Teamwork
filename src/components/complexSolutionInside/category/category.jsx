import Image from "next/image" 
import categoryr from '@/assets/images/categoryr.jpg'

export default function Category() {
    return(<>
    <section className="max-w-[1430px] m-auto my-[70px] px-[15px]">
        <h3 className="text-[55px] font-[100] xs:text-[30px]"><span className="font-[600] text-[55px] xs:text-[30px]">п</span>ристрої цієї категорії</h3>
       <div className="flex justify-between">
       <div className="py-[20px] w-[24%] xs:w-[100%]">
            <Image src={categoryr} alt="" />
            <p className="text-center text-[20px] font-[500]">Зерновой барабанный <br /> сепаратор "ЛУЧ" ЗСО</p>
        </div>
        <div className="py-[20px] w-[24%] xs:hidden">
            <Image src={categoryr} alt="" />
            <p className="text-center text-[20px] font-[500]">Зерновой барабанный <br /> сепаратор "ЛУЧ" ЗСО</p>
        </div>
        <div className="py-[20px] w-[24%] xs:hidden">
            <Image src={categoryr} alt="" />
            <p className="text-center text-[20px] font-[500]">Зерновой барабанный <br /> сепаратор "ЛУЧ" ЗСО</p>
        </div>
        <div className="py-[20px] w-[24%] xs:hidden">
            <Image src={categoryr} alt="" />
            <p className="text-center text-[20px] font-[500]">Зерновой барабанный <br /> сепаратор "ЛУЧ" ЗСО</p>
        </div>
       </div>
    </section>
    </>)
}