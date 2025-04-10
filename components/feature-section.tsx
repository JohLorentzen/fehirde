"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

export default function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Powered by Ancient Wisdom, Built for the Future
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Our AI system draws inspiration from Nordic traditions, combining ancient rune wisdom with cutting-edge
              machine learning technology. This unique approach allows us to deliver insights that are both innovative
              and grounded in time-tested knowledge systems, creating a powerful tool for your decision-making
              processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group">
                Discover how it works
                <MoveRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">View case studies</Button>
            </div>
          </div>
          <div className="relative h-[450px] w-full flex items-center justify-center">
            <NordicAiSvg isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}

function NordicAiSvg({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
      <motion.svg
        viewBox="0 0 400 400"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        {/* Background hexagon */}
        <motion.path
          d="M200 40 L340 120 L340 280 L200 360 L60 280 L60 120 Z"
          fill="none"
          stroke="#334155"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="dark:stroke-slate-600"
        />

        {/* Inner hexagon */}
        <motion.path
          d="M200 80 L300 140 L300 260 L200 320 L100 260 L100 140 Z"
          fill="none"
          stroke="#475569"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="dark:stroke-slate-500"
        />

        {/* Central circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="#1E3A8A"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          className="dark:fill-blue-950"
        />

        {/* Rune circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="70"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="1,6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="dark:stroke-blue-400"
        />

        {/* Yggdrasil-inspired tree structure */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Trunk */}
          <motion.path d="M200 140 L200 260" stroke="#94A3B8" strokeWidth="4" className="dark:stroke-slate-400" />

          {/* Branches */}
          <motion.path
            d="M200 160 L160 130 M200 180 L150 160 M200 200 L140 200 M200 220 L150 240 M200 240 L160 270"
            stroke="#94A3B8"
            strokeWidth="3"
            className="dark:stroke-slate-400"
          />

          <motion.path
            d="M200 160 L240 130 M200 180 L250 160 M200 200 L260 200 M200 220 L250 240 M200 240 L240 270"
            stroke="#94A3B8"
            strokeWidth="3"
            className="dark:stroke-slate-400"
          />
        </motion.g>

        {/* Rune symbols with thick black strokes */}
        {runeSymbols.map((rune, index) => (
          <motion.g
            key={index}
            transform={`translate(${rune.x}, ${rune.y}) scale(${rune.scale || 1})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          >
            {/* Glow effect */}
            <path
              d={rune.path}
              stroke="#94A3B8"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.3"
              fill="none"
              className="dark:stroke-slate-400"
            />

            {/* Main rune with thick black stroke */}
            <path
              d={rune.path}
              stroke="#000000"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="dark:stroke-black"
            />
          </motion.g>
        ))}

        {/* Glowing orbs */}
        {glowingOrbs.map((orb, index) => (
          <motion.circle
            key={`orb-${index}`}
            cx={orb.x}
            cy={orb.y}
            r={orb.radius}
            fill={orb.color}
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.3,
            }}
            className={orb.darkClass}
          />
        ))}

        {/* Energy lines */}
        {energyLines.map((line, index) => (
          <motion.path
            key={`energy-${index}`}
            d={line.path}
            stroke="#3B82F6"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
              repeatDelay: 1,
            }}
            className="dark:stroke-blue-500"
          />
        ))}

        {/* Central AI "eye" */}
        <motion.circle
          cx="200"
          cy="200"
          r="25"
          fill="#BFDBFE"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? [0, 1.2, 1] : 0 }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
          className="dark:fill-blue-200"
        />

        <motion.circle
          cx="200"
          cy="200"
          r="15"
          fill="#1E40AF"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="dark:fill-blue-800"
        />

        {/* Pulsing ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="40"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="dark:stroke-blue-400"
        />
      </motion.svg>
    </div>
  )
}

// Updated runeSymbols with thicker paths for black strokes
const runeSymbols = [
  // Fehu (wealth) at the top - rune #1
  {
    x: 185,
    y: 70,
    path: "M0 0 L0 30 M0 5 L15 0 M0 20 L15 15",
    scale: 1.5,
  },

  // Uruz (strength) on the right top - rune #2
  {
    x: 270,
    y: 110,
    path: "M0 0 L0 25 L15 30 L15 5 L0 0",
    scale: 1.5,
  },

  // Thurisaz (giant) on the right - rune #3
  {
    x: 280,
    y: 190,
    path: "M0 0 L0 30 M0 10 L15 10",
    scale: 1.5,
  },

  // Ansuz (god) on the right bottom - rune #4
  {
    x: 270,
    y: 270,
    path: "M0 0 L0 30 M0 8 L15 0 M0 20 L15 25",
    scale: 1.5,
  },

  // Raidho (journey) on the bottom - rune #5
  {
    x: 185,
    y: 310,
    path: "M0 0 L0 30 M0 8 L15 8 L15 30",
    scale: 1.5,
  },

  // Kenaz (torch) on the left bottom - rune #6
  {
    x: 100,
    y: 270,
    path: "M15 0 L0 15 L15 30",
    scale: 1.5,
  },

  // Gebo (gift) on the left - rune #7
  {
    x: 90,
    y: 190,
    path: "M0 0 L15 30 M15 0 L0 30",
    scale: 1.5,
  },

  // Wunjo (joy) on the left top - rune #8
  {
    x: 100,
    y: 110,
    path: "M0 0 L0 30 L15 15 L0 15",
    scale: 1.5,
  },
]

// Update the glowingOrbs to better align with the new rune positions
const glowingOrbs = [
  { x: 190, y: 100, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
  { x: 250, y: 140, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
  { x: 260, y: 200, radius: 8, color: "#60A5FA", darkClass: "dark:fill-blue-400" },
  { x: 250, y: 260, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
  { x: 190, y: 300, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
  { x: 130, y: 260, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
  { x: 120, y: 200, radius: 8, color: "#60A5FA", darkClass: "dark:fill-blue-400" },
  { x: 130, y: 140, radius: 6, color: "#93C5FD", darkClass: "dark:fill-blue-300" },
]

// Energy flow lines
const energyLines = [
  { path: "M200 200 C230 150, 280 180, 320 150" },
  { path: "M200 200 C170 150, 120 180, 80 150" },
  { path: "M200 200 C230 250, 280 220, 320 250" },
  { path: "M200 200 C170 250, 120 220, 80 250" },
  { path: "M200 200 C200 150, 200 120, 200 80" },
  { path: "M200 200 C200 250, 200 280, 200 320" },
]

