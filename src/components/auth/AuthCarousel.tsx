"use client"

import cookies from "../../../public/cookies.jpg";
import breads from "../../../public/breads.jpeg";
import fudge from "../../../public/fudge.jpeg";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import React from "react";

type Props = React.ComponentProps<"div">;

export default function AuthCarousel({ className, ...props }: Props) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500 })])
    return (
        <div className={`embla absolute inset-0 w-full h-full z-0 ${className}`} ref={emblaRef} {...props}>
            <div className="embla__container w-full h-full">
                <Image className="embla__slide w-full h-full object-cover" src={cookies} alt="Fundo decorativo" />
                <Image className="embla__slide w-full h-full object-cover" src={breads} alt="Fundo decorativo" />
                <Image className="embla__slide w-full h-full object-cover" src={fudge} alt="Fundo decorativo" />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

    )
}