import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Founder from "@/components/founder"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030314] to-[#0a0a2e]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Founder />
      <Footer />
    </main>
  )
}

