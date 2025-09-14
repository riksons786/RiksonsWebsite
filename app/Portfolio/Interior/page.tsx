import { Navigation } from "@/components/navigation/navbar"
import { PortfolioCategory } from "../../../components/sections/portfolioCat"

export default function InteriorDesignPage() {
  return (
    <>
      <Navigation bg="gray"/>
      <div className="min-h-screen bg-background" style={{paddingTop: '80px'}}>
        <PortfolioCategory category="interior design" categoryTitle="Interior Design" />
      </div>
    </>
  )
}