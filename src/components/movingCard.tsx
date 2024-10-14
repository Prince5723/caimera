"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            `I'm actually quite impressed by the quality of the images you've produced. They're better than 12 other AI products we've tried out.`,
        name: "CEO",
        title: "Fahion Brand",
    },
    {
        quote:
            `Caimera's AI images are seeing an increase in click through rate by 50%, that is huge increase in conversions.`,
        name: "Author",
        title: "Famous Magazine",
    },
    {
        quote:
            `This has solved a huge problem for us of generating attractive click worthy content consistently, Caimera has automated a huge creative process for our company to launch products on time`,
        name: "CFO",
        title: "E-Commerce Brand",
    },
    {
        quote:
            `CTR on statc ads with Caimera images vs real images have a 1.5x better CTR, and also 50% lower Cost Per Click.`,
        name: "CTO",
        title: "Data from largest active wear brands",
    },
    {
        quote:
            `CTR is 100% higher on Caimera's images than regular shoots. You already saved us so much money in this harsh economy!`,
        name: "Founder",
        title: "Large fashion conglomerate",
    },
];
