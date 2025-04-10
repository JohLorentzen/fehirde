"use client"

import React, { useRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { TextAnimate } from "./magicui/text-animate"

const Circle = React.forwardRef<
  HTMLDivElement,
  {
    className?: string
    children?: React.ReactNode
    logo?: string
    alt?: string
    size?: "sm" | "md" | "lg"
  }
>(({ className, children, logo, alt = "Logo", size = "md" }, ref) => {
  const sizeClasses = {
    sm: "size-12",
    md: "size-14",
    lg: "size-20",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        sizeClasses[size],
        className,
      )}
    >
      {logo ? (
        <Image
          src={logo || "/placeholder.svg"}
          alt={alt}
          width={size === "lg" ? 50 : 40}
          height={size === "lg" ? 50 : 40}
          className="bg-background"
        />
      ) : (
        children
      )}
    </div>
  )
})

Circle.displayName = "Circle"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const leftTopRef = useRef<HTMLDivElement>(null)
  const leftMiddleRef = useRef<HTMLDivElement>(null)
  const leftBottomRef = useRef<HTMLDivElement>(null)
  const rightTopRef = useRef<HTMLDivElement>(null)
  const rightMiddleRef = useRef<HTMLDivElement>(null)
  const rightBottomRef = useRef<HTMLDivElement>(null)

  // Replace these with your own logo URLs
  const logos = {
    centerLogo: "/logos/logo.svg?height=80&width=80", // Your main logo
    leftTop: "/logos/DNB_ASA_logo.svg?height=40&width=40",
    leftMiddle: "/logos/firi-logo.svg?height=40&width=40",
    leftBottom: "/logos/Kron-logo.svg?height=50&width=50",
    rightTop: "/logos/nordnetlogo.svg?height=40&width=40",
    rightMiddle: "/logos/revolute.svg?height=40&width=40",
    rightBottom: "/logos/sparebank-1.svg?height=40&width=40",
  }

  return (
    <section className="w-full bg-secondary py-16 md:py-24 landing-page flex-between">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4  font-bold tracking-tight md:text-5xl lg:text-9xl">
            FEHIRDE
          </h1>
          <TextAnimate>
            Formuesforvaltning, gjort enkelt.
          </TextAnimate>
        </div>

        <div
          className="relative mx-auto flex h-[400px] w-full max-w-4xl items-center justify-center overflow-hidden p-10"
          ref={containerRef}
        >
          {/* Center logo */}
          <Circle
            ref={centerRef}
            logo={logos.centerLogo} 
            alt="Your Brand"
            size="lg"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border-4 border-primary/20"
          />

          {/* Left side logos */}
          <div className="absolute left-10 top-1/4">
            <Circle ref={leftTopRef} logo={logos.leftTop} alt="Integration 1" />
          </div>
          <div className="absolute left-20 top-1/2 -translate-y-1/2">
            <Circle ref={leftMiddleRef} logo={logos.leftMiddle} alt="Integration 2" />
          </div>
          <div className="absolute bottom-1/4 left-10">
            <Circle ref={leftBottomRef} logo={logos.leftBottom} alt="Integration 3" />
          </div>

          {/* Right side logos */}
          <div className="absolute right-10 top-1/4">
            <Circle ref={rightTopRef} logo={logos.rightTop} alt="Integration 4" />
          </div>
          <div className="absolute right-20 top-1/2 -translate-y-1/2">
            <Circle ref={rightMiddleRef} logo={logos.rightMiddle} alt="Integration 5" />
          </div>
          <div className="absolute bottom-1/4 right-10">
            <Circle ref={rightBottomRef} logo={logos.rightBottom} alt="Integration 6" />
          </div>

          {/* Left to center beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftTopRef}
            toRef={centerRef}
            curvature={-30}
            gradientStartColor="#3b82f6"
            gradientStopColor="#8b5cf6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftMiddleRef}
            toRef={centerRef}
            gradientStartColor="#3b82f6"
            gradientStopColor="#8b5cf6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftBottomRef}
            toRef={centerRef}
            curvature={30}
            gradientStartColor="#3b82f6"
            gradientStopColor="#8b5cf6"
          />

          {/* Right to center beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightTopRef}
            toRef={centerRef}
            curvature={30}
            reverse
            gradientStartColor="#8b5cf6"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightMiddleRef}
            toRef={centerRef}
            reverse
            gradientStartColor="#8b5cf6"
            gradientStopColor="#3b82f6"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightBottomRef}
            toRef={centerRef}
            curvature={-30}
            reverse
            gradientStartColor="#8b5cf6"
            gradientStopColor="#3b82f6"
          />
        </div>
      </div>
    </section>
  )
}

