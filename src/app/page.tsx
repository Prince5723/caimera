import { HeroParallaxDemo } from "@/components/parallax";
import {InfiniteMovingCardsDemo} from '@/components/movingCard'
import { TextHoverEffectDemo } from "@/components/testimonial";
import { AppleCardsCarouselDemo } from "@/components/carousel";
import { HowItWorks } from "@/components/how-it-works";
import {FloatingDockDemo} from '@/components/floatingDock'

export default function Home() {
  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full">
    <HeroParallaxDemo />
    <TextHoverEffectDemo/>
    <div className="">
    <InfiniteMovingCardsDemo/>
    </div>
    <HowItWorks/>
    <div className="mb-10 box-content">
    <AppleCardsCarouselDemo/>
    </div>
    <div className="mb-8 bg-black">
    <FloatingDockDemo/>
    </div>
    </div>
    </>
  );
}
