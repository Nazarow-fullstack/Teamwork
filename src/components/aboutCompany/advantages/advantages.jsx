import Image from "next/image"
import c1 from '@/assets/images/circle1.png'
import c2 from '@/assets/images/circle2.png'
import c3 from '@/assets/images/circle3.png'
import c4 from '@/assets/images/circle4.png'

export default function Advantages() {
    return(<>
    <section className="max-w-7xl m-auto my-[50px] px-[15px]">
        <h1 className="text-[35px] font-[200] text-center"><span className="font-[600]">П</span>РЕИМУЩЕСТВА</h1>
        <div className="w-[100%] flex justify-between xs:grid xs:grid-cols-2 xs:gap-[10px]">
            <Image className="w-[180px]" src={c1} />
            <Image className="w-[180px]" src={c2} />
            <Image className="w-[180px]" src={c3} />
            <Image className="w-[180px]" src={c4} />
        </div>
    </section>
    </>)
}