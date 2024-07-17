import { createLazyFileRoute, Link } from '@tanstack/react-router'

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, Rocket, Coins, Waypoints, Webhook } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import WordRotate from '@/components/magicui/word-rotate';
import LogoDark from "@/assets/logo-bg.svg";
import LogoLight from "@/assets/logo-gradient.svg";

// animation entry
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const MotionBox = motion.div;
const variants = {
  enter: () => {
    return {
      y: 5,
      opacity: 0,
    };
  },
  center: {
    zIndex: 0,
    y: 0,
    opacity: 1
  },
  exit: () => {
    return {
      xIndex: 0,
      y: 5,
      opacity: 0,
    }
  }
};

const TestImageComp = ({ src }: { src: string }) => (
  <MotionBox
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    // whileHover={{ scale: 0.97, cursor: "pointer" }}
    className='rounded-lg h-62 w-62 absolute'
  >
    <img
      src={src}
      width={"100%"}
      height={"100%"}
      alt="Company Logo"
      className="not-prose"
    />
  </MotionBox>
)


type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Waypoints className="h-6 w-6" />,
    title: "Node Autonomy",
    href: "/",
    description:
      "You're not too dumb to manage your personal lightning node, or deploy seperately for your business needs. With easy to reason about tools at your disposal.",
    cta: "Learn More",
  },
  {
    icon: <Webhook className="h-6 w-6" />,
    title: "SDK/API Service",
    href: "/",
    description:
      "Start routing payments to and from your users on whatever platform, utilizing your deployed lightning node. Zero worries about in/out bound liquidity setup.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Notable mentions",
    href: "/",
    description:
      "The following projects are also actively being developed as part of the ecosystem, and therefore any feedback is welcomed.",
    cta: undefined,
  },
];


export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  const {setTheme, theme} = useTheme();

  const transition = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  }

  return (
    <>
      <Section>
        <Container className="flex flex-col items-center text-center">
          {/* TODO: add easter egg SATS giveaway */}
          <div className='relative h-[172px] w-[172px] md:mb-8 mb-6 hover:scale-95 hover:cursor-pointer transition-all' onClick={() => transition(theme === 'light' ? 'dark' : 'light')}>
            <AnimatePresence initial={false} custom={theme}>
              {theme === "light" && <TestImageComp key={"0"} src={LogoLight} />}
              {theme === 'dark' && <TestImageComp key={"1"} src={LogoDark} />}
            </AnimatePresence>
          </div>
          <h1 className="!mb-0 lg:text-4xl leading-normal md:text-3xl font-bold">
            <Balancer>
              The Bitcoin OS for African<br /> <WordRotate className='!mb-0 lg:text-4xl leading-normal md:text-3xl font-bold' words={["Businesses", "Enterprise", "People"]} />
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mt-2 text-lg leading-normal lg:max-w-lg">
            <Balancer>
              For the new generation of money.
              Seamless inter-operability with legacy systems.
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


      <Section>
        <Container className="not-prose">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl lg:-mb-4 sm:mb-0">
              <Balancer>
                Double down on products that<br /> solve problems
              </Balancer>
            </h3>
            <h4 className="text-2xl font-light opacity-70">
              <Balancer>
                The products and features we're currently working on
              </Balancer>
            </h4>

            <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
              {featureText.map(
                ({ icon, title, description, href, cta }, index) => (
                  <Link
                    href={`${href}`}
                    className="flex flex-col justify-between gap-6 rounded-lg border border-slate-700 dark:border-slate-400 p-6 transition-all hover:-mt-2 hover:mb-2"
                    key={index}
                  >
                    <div className="grid gap-4">
                      {icon}
                      <h4 className="text-xl text-primary">{title}</h4>
                      <p className="text-base opacity-75">{description}</p>
                    </div>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold">
                        <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Link>
                ),
              )}
            </div>
            <div>
              {singleFeatureText.map(
                ({ icon, title, description, cta }, index) => (
                  <div
                    className="flex flex-col justify-between gap-6 rounded-lg border border-slate-700 dark:border-slate-400  bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
                    key={index}
                  >
                    <div className="grid gap-4">
                      {icon}
                      <h4 className="text-xl text-primary">{title}</h4>
                      <p className="text-base opacity-75">{description}</p>
                    </div>
                    <div className="grid gap-4">
                      <a href="https://bagggit.tambori.co" target='_blank' className='text-blue-600 font-normal text-sm'>Bagggit</a>
                      <a href="https://os.tambori.co/demo/bit-wall" target='_blank' className='text-blue-600 font-normal text-sm'>Bit Wall</a>
                      <a href="https://os.tambori.co/demo/content-kit" target='_blank' className='text-blue-600 font-normal text-sm'>Content Kit</a>
                    </div>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold">
                        <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
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


