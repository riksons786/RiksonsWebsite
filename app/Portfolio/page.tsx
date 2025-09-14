import { Footer } from "@/components/navigation/footer";
import { Navigation } from "@/components/navigation/navbar";
import { Portfolio } from "@/components/sections/portfolio";
import { Nav } from "react-day-picker";


export default function PortfolioPage() {
    return(
        <>
        <Navigation bg="gray" />
        <Portfolio />
        <Footer />
        </>
    )
}