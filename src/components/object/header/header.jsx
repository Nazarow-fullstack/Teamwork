export default function Header() {
    return<>
    <section className="max-w-7xl m-auto text-center px-[15px]">
        <span className="text-center text-[14px] m-auto">Главная / <span className="font-[600]">Обьекты</span></span>
        <h1 className="text-center text-[50px] font-[700] my-[20px]">Объекты</h1>
        <div className="w-[100%] flex gap-[10px] xs:block">
            <div className="bg-[#F8F8F8] p-[20px] flex items-center gap-[45px] xs:grid xs:grid-cols-1 xs:gap-[10px]">
                <h1 className="text-[23px] font-[700] text-left">Сортировка объектов</h1>
                <div className="p-[10px] w-[187px] flex justify-between border-[1.6px] border-black items-center">
                    <span>Страна</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.27441 5.28675L9.88692 0.661458C10.038 0.509915 10.0377 0.264565 9.88614 0.113276C9.73459 -0.0378949 9.48911 -0.0375043 9.33795 0.114058L4.99998 4.46404L0.662031 0.113901C0.51086 -0.0376414 0.265529 -0.0380321 0.113967 0.11312C0.0379906 0.188959 1.89475e-06 0.288314 1.8904e-06 0.38767C1.88607e-06 0.486771 0.0377369 0.585735 0.113186 0.661438L4.72557 5.28675C4.79819 5.35974 4.89701 5.4007 4.99998 5.4007C5.10295 5.4007 5.20166 5.35962 5.27441 5.28675Z" fill="black"/>
</svg>
                </div>
                <div className="p-[10px] w-[187px] flex justify-between border-[1.6px] border-black items-center">
                    <span>Область</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.27441 5.28675L9.88692 0.661458C10.038 0.509915 10.0377 0.264565 9.88614 0.113276C9.73459 -0.0378949 9.48911 -0.0375043 9.33795 0.114058L4.99998 4.46404L0.662031 0.113901C0.51086 -0.0376414 0.265529 -0.0380321 0.113967 0.11312C0.0379906 0.188959 1.89475e-06 0.288314 1.8904e-06 0.38767C1.88607e-06 0.486771 0.0377369 0.585735 0.113186 0.661438L4.72557 5.28675C4.79819 5.35974 4.89701 5.4007 4.99998 5.4007C5.10295 5.4007 5.20166 5.35962 5.27441 5.28675Z" fill="black"/>
</svg>
                </div>
            </div>
            <div className="bg-[#F8F8F8] p-[20px] flex items-center gap-[45px] xs:grid xs:grid-cols-1 xs:gap-[10px]">
                <h1 className="text-[23px] font-[700] text-left">Дата монтажа</h1>
                <div className="p-[10px] w-[187px] flex justify-between border-[1.6px] border-black items-center">
                    <span>Год</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.27441 5.28675L9.88692 0.661458C10.038 0.509915 10.0377 0.264565 9.88614 0.113276C9.73459 -0.0378949 9.48911 -0.0375043 9.33795 0.114058L4.99998 4.46404L0.662031 0.113901C0.51086 -0.0376414 0.265529 -0.0380321 0.113967 0.11312C0.0379906 0.188959 1.89475e-06 0.288314 1.8904e-06 0.38767C1.88607e-06 0.486771 0.0377369 0.585735 0.113186 0.661438L4.72557 5.28675C4.79819 5.35974 4.89701 5.4007 4.99998 5.4007C5.10295 5.4007 5.20166 5.35962 5.27441 5.28675Z" fill="black"/>
</svg>
                </div>
                <div className="p-[10px] w-[187px] flex justify-between border-[1.6px] border-black items-center">
                    <span>Месяц</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.27441 5.28675L9.88692 0.661458C10.038 0.509915 10.0377 0.264565 9.88614 0.113276C9.73459 -0.0378949 9.48911 -0.0375043 9.33795 0.114058L4.99998 4.46404L0.662031 0.113901C0.51086 -0.0376414 0.265529 -0.0380321 0.113967 0.11312C0.0379906 0.188959 1.89475e-06 0.288314 1.8904e-06 0.38767C1.88607e-06 0.486771 0.0377369 0.585735 0.113186 0.661438L4.72557 5.28675C4.79819 5.35974 4.89701 5.4007 4.99998 5.4007C5.10295 5.4007 5.20166 5.35962 5.27441 5.28675Z" fill="black"/>
</svg>
                </div>
            </div>
        </div>
        <div className="flex gap-[20px] items-center mt-[30px] flex-wrap">
            <div className="bg-[#FEAD04] text-white p-[10px] flex items-center justify-between w-[200px]">
                <span>Украина</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.3L11.7 0L6.5 5.2L1.3 0L0 1.3L5.2 6.5L0 11.7L1.3 13L6.5 7.8L11.7 13L13 11.7L7.8 6.5L13 1.3Z" fill="white"/>
</svg>
            </div>
            <div className="bg-[#FEAD04] text-white p-[10px] flex items-center justify-between w-[200px]">
                <span>Житомирская</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.3L11.7 0L6.5 5.2L1.3 0L0 1.3L5.2 6.5L0 11.7L1.3 13L6.5 7.8L11.7 13L13 11.7L7.8 6.5L13 1.3Z" fill="white"/>
</svg>
            </div>
            <span className="text-[#B6B6B6] font-[500]">Удалить всё</span>
        </div>
    </section>
    </>
}