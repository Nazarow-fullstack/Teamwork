import Image from "next/image"
import banerb2 from '@/assets/images/banerb2.jpg'

export default function Baner2() {
    return(<>
    <section className="w-[100%] flex items-center xs:block">
        <div className="w-[50%] flex justify-center xs:w-[100%]">
           <div className="w-[87%] m-auto">
           <h6 className="text-[26px] font-[700] mt-[30px] mb-[20px]">Предварительная очистка зернового вороха</h6>
            <p className="text-[16px] font-[300] leading-[24px]">Выделение легких, мелких и крупных примесей с целью обеспечения бла­гоприятных <br /> условий при выполнении последующих техноло­гических операций послеуборочной <br /> обработки зерна, главным образом его сушки.</p>
            <h6 className="text-[26px] font-[700] mt-[30px] mb-[20px]">Первичная очистка зерна</h6>
            <p className="text-[16px] font-[300] leading-[24px]">Выделение крупных, мелких и легких примесей и сортирование на основную <br /> (про­довольственную и семенную) и фуражную фракции при ми­нимальных потерях <br /> основного зерна. При этом основная фракция должна соответствовать нормам <br /> заготовитель­ных базисных кондиций. При невысокой засоренности и влаж­ности <br /> зерна послеуборочную обработку можно начинать с пер­вичной очистки.</p>
            <h6 className="text-[26px] font-[700] mt-[30px] mb-[20px]">Вторичная очистка</h6>
            <p className="text-[16px] font-[300] leading-[24px]">Применяется для зерна, прошедшего первичную очистку с <br /> целью доведения его качества до кондиций продовольственного <br /> или  семенного назначения.</p>
            <h6 className="text-[26px] font-[700] mt-[30px] mb-[20px]">Сортирование</h6>
            <p className="text-[16px] font-[300] leading-[24px]">Разделение зерна основной культуры на фракции по какому-нибудь признаку <br /> (размерам, плотности, скорости витания и т.д.). К сортированию можно отнести и <br /> калиброва­ние — разделение семян по размерам. Таким образом, послеуборочная <br /> очистка представляет собой комп­лекс взаимосвязанных и дополняющих друг друга <br /> технологи­ческих операций, результатом которых является обеспечение качества <br /> зерна, позволяющего использование его в пищевых, фуражных или семенных целях.</p>
           </div>
             </div>
        <div className="w-[50%] xs:w-[100%]">
            <Image className="w-[100%]" src={banerb2} alt="" />
        </div>
    </section>
    </>)
}