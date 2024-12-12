import Baner from "@/components/aboutCompany/baner/baner"
import About from "@/components/aboutCompany/about/about"
import Email from "@/components/complexSolutionInside/email/email"
import Sertificat from "@/components/aboutCompany/sertificat/sertificat"
import AboutC from "@/components/aboutCompany/aboutC/aboutC"
import Direction from "@/components/aboutCompany/direction/direction"
import Advantages from "@/components/aboutCompany/advantages/advantages"

export default function AboutCompanypage() {
    return(<>
    <Baner />
    <About />
    <AboutC />
    <Direction />
    <Sertificat />
    <Advantages />
    <Email />
    </>)
}