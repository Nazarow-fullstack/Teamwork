import Image from "next/image"
import banerbb from '@/assets/images/banerbb.jpg'
import banerb2 from '@/assets/images/banerb2.jpg'

export default function Video() {
    return(<>
    <section className="max-w-[1430px] m-auto px-[15px]">
        <h5 className="text-[50px] font-[700] mb-[15px]">Відео</h5>
        <div className="flex h-[400px] gap-[25px] xs:block xs:h-[620px]">
        <Image className="w-[50%] xs:w-[100%] h-[250px] mb-[20px]" src={banerbb} alt="" />
        <Image className="w-[50%] xs:w-[100%] h-[250px]" src={banerb2} alt="" />
        </div>
    </section>
    </>)
}