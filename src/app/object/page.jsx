import Card from "@/components/object/card/card"
import Header from "@/components/object/header/header"

export default function Object() {
    return(<>
    <Header />
   <section className="max-w-7xl m-auto grid grid-cols-3 gap-x-[20px] xs:grid-cols-1 xs:gap-x-[20px] px-[15px]">
   <Card /> 
   <Card /> 
   <Card /> 
   <Card /> 
   <Card /> 
   <Card />
   </section>
    </>)
}