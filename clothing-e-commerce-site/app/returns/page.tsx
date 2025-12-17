import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            samehafabs
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Return Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 17, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Return Window</h2>
            <p className="text-muted-foreground leading-relaxed">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, you may
              return most items within 30 days of delivery for a full refund or exchange. The item must be in its
              original condition with all tags attached and in its original packaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Eligible Items for Return</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">The following items are eligible for return:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Unworn items with original tags attached</li>
              <li>Items in original packaging</li>
              <li>Items without signs of wear, damage, or alteration</li>
              <li>Items purchased at full price or on sale (unless marked as final sale)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Non-Returnable Items</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For hygiene and safety reasons, the following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Underwear and intimate apparel</li>
              <li>Swimwear (if hygienic seal is removed)</li>
              <li>Items marked as "Final Sale"</li>
              <li>Gift cards</li>
              <li>Items that have been worn, washed, or damaged</li>
              <li>Items without original tags</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How to Return</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To initiate a return, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Contact our customer service team at returns@samehafabs.com with your order number</li>
              <li>We'll provide you with a return authorization number and shipping label</li>
              <li>Pack the item securely in its original packaging</li>
              <li>Attach the return shipping label to the package</li>
              <li>Drop off the package at any authorized shipping location</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Return Shipping Costs</h2>
            <p className="text-muted-foreground leading-relaxed">
              Return shipping costs depend on the reason for the return. If the return is due to our error (wrong item
              sent, defective product, etc.), we'll cover the return shipping costs. For returns due to change of mind
              or size issues, you'll be responsible for return shipping costs, which will be deducted from your refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once we receive your return, please allow 5-7 business days for us to inspect the item and process your
              refund. Refunds will be issued to the original payment method. Please note that it may take an additional
              5-10 business days for the refund to appear in your account, depending on your financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Exchanges</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you'd like to exchange an item for a different size or color, please contact our customer service team.
              We'll be happy to help you find the right item. If the item you want is in stock, we'll ship it to you
              free of charge once we receive your return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Damaged or Defective Items</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you receive a damaged or defective item, please contact us immediately at support@samehafabs.com with
              photos of the item and packaging. We'll arrange for a replacement or full refund, including return
              shipping costs. Please report any issues within 7 days of receiving your order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. International Returns</h2>
            <p className="text-muted-foreground leading-relaxed">
              International customers are responsible for return shipping costs and any applicable customs fees. Please
              contact our customer service team before initiating an international return to discuss the best shipping
              method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our return policy, please don't hesitate to contact us at
              returns@samehafabs.com or call us at +1 (555) 123-4567. Our customer service team is here to help!
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
