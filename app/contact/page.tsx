import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Send me a message.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              className="bg-card border-border resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Or reach out directly:</p>
          <Link
            href="mailto:hello@billefthimiou.com"
            className="text-foreground hover:underline"
          >
            hello@billefthimiou.com
          </Link>
        </div>
      </div>
    </section>
  );
}
