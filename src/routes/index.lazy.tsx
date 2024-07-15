import { createLazyFileRoute, Link } from '@tanstack/react-router'

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/react.svg";

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <img
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0 lg:text-4xl md:text-3xl font-bold">
          <Balancer>
            The Bitcoin OS for Africans
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2 size-4" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Dolor Sit Amet -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>

  )
}

// // Asset imports
// import Logo from "@/public/logo.svg";


