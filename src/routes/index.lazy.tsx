import { createLazyFileRoute, Link } from '@tanstack/react-router'

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, Rocket } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo-bg.svg";

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  return (
    <>
      <Section>
        <Container className="flex flex-col items-center text-center">
          <img
            src={Logo}
            width={172}
            height={72}
            alt="Company Logo"
            className="not-prose mb-6 dark:invert md:mb-8"
          />
          <h1 className="!mb-0 lg:text-4xl leading-normal md:text-3xl font-bold">
            <Balancer>
              The Bitcoin OS for African
            </Balancer>
            <br />
            Businesses
          </h1>
          <h3 className="text-muted-foreground text-lg leading-normal lg:max-w-lg">
            <Balancer>
              Tools for the new generation of money with bitcoin at the core.
              Seamless migration from legacy systems.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-2 md:mt-12">
            <Button asChild>
              <a href="https://os.tambori.co" target="_self">
                <Rocket className="mr-2 size-4" />
                Get started
              </a>
            </Button>
            <Button variant={"ghost"} asChild>
              <a href="https://google.com" target="_blank">Watch the demo
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      <footer className="not-prose border-t">
        <Section>
          <Container className="grid gap-6 place-items-center">
            <div className="flex gap-6">
              <Link href="/">
                <h3 className="sr-only">tambori logo</h3>
                <img
                  src={"/tambori-icon-black.svg"}
                  alt="Logo"
                  width={90}
                  height={90}
                  className="transition-all hover:opacity-75 dark:invert"
                />
              </Link>

              <div className='grid gap-4'>
                <p>
                  <Balancer>
                    tambori is a project commited to the development of technology, that will aid
                    the seamless adoption of bitcoin on the African continent.
                  </Balancer>
                </p>
                <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms-of-service">Terms of Service</Link>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </div>
                <p className="text-muted-foreground">
                  ©{" "}
                  <a href="https://github.com/tambori">tambori</a>
                  . All rights reserved. 2024-present.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </footer>

    </>
  )
}

// // Asset imports
// import Logo from "@/public/logo.svg";


