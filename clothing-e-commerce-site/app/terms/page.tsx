import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 17, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the samehafabs website, you accept and agree to be bound by the terms and provision
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Permission is granted to temporarily access the materials (information or software) on samehafabs' website
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We attempt to be as accurate as possible in describing our products. However, we do not warrant that
              product descriptions, colors, information or other content available on the website is accurate, complete,
              reliable, current or error-free. We reserve the right to correct any errors, inaccuracies or omissions and
              to change or update information at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              All prices are subject to change without notice. We reserve the right to modify or discontinue any product
              without notice. Payment must be received by us before your order is dispatched. We accept various forms of
              payment including credit cards, debit cards, and other payment methods as indicated on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to dispatch orders within 2-3 business days. Delivery times vary depending on your location and
              chosen shipping method. samehafabs is not responsible for delays caused by shipping carriers or customs
              procedures. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Account Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you create an account on our website, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall samehafabs or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on samehafabs' website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at support@samehafabs.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
