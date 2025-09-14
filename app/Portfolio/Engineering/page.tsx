import { Navigation } from "@/components/navigation/navbar"
import { PortfolioCategory } from "../../../components/sections/portfolioCat"

export default function EngineeringPage() {
  return (
    <>
      <Navigation bg="gray"/>
      <div className="min-h-screen bg-background" style={{paddingTop: '80px'}}>
        <PortfolioCategory category="engineering" categoryTitle="Engineering" />
      </div>
    </>
  )
}