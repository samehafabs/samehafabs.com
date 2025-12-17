import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Classic Cotton Tee",
      price: 2499,
      image: "/classic-white-cotton-t-shirt-minimal.jpg",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 7499,
      image: "/modern-denim-jacket-fashion.jpg",
    },
    {
      id: 3,
      name: "Linen Pants",
      price: 4999,
      image: "/beige-linen-pants-minimalist.jpg",
    },
    {
      id: 4,
      name: "Merino Sweater",
      price: 6499,
      image: "/grey-merino-wool-sweater.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            samehafabs
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              Shop
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button size="icon" variant="ghost">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Timeless style meets modern comfort
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Discover our curated collection of premium clothing designed for the contemporary wardrobe.
            </p>
            <Button size="lg" className="text-base">
              Shop Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About samehafabs</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe in creating clothing that stands the test of time. Our pieces are thoughtfully designed and
              crafted from premium materials to ensure quality, comfort, and style.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every garment in our collection reflects our commitment to sustainable fashion and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">samehafabs</h3>
              <p className="text-sm text-muted-foreground">Premium clothing for the modern wardrobe.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} samehafabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
