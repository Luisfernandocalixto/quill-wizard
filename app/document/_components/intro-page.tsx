/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7ykC8v9quj6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { SignInButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function IntroPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="container mx-auto py-8 px-4 md:py-12 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Unlock your Writing Potential ⚡
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover how our cutting-edge products and services can transform
              your writing with th power of IA
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <SignInButton>
                  Get Started
                </SignInButton>
              </Link>
            </div>
          </div>
          <Image
            src="./work.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </header>
    </div>
  )
}