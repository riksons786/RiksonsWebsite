import { Footer } from "@/components/navigation/footer";
import { Navigation } from "@/components/navigation/navbar";
import { Services } from "@/components/sections/services";


export default function ServicesPage() {
    return(
        <>
        <Navigation bg="gray" />
        <Services />
        <Footer />
        </>
    )
}