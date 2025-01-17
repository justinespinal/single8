import Image from "next/image"
import "@/app/ui/global.css"
import anime from "animejs"
import { useEffect, useState } from "react"

export default function SplashScreen({finishLoading}:{finishLoading: any}) {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(), 
        })

        loader
            .add({
                targets: "#logo",
                delay: 0,
                scale: 1,
                duration: 1000,
                rotate: {
                    value: 720,
                    duration: 1800,
                    easing: 'easeInOutSine'
                },
            })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])
    return (
        <div className="flex justify-center items-center bg-orange-400 h-screen">
            <Image
                src = "/single8-camera.png"
                width={100}
                height={100}
                alt="single8 camera"
                className="animate-spin"
                id="logo"
            />
        </div>
    )
}