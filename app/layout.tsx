"use client"

import "@/app/ui/global.css"
import SplashScreen from "./ui/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if(isLoading){
      return
    }
  }, [isLoading])

  return (
    <html lang="en">
      <body>
        <div className="bg-orange-400 h-screen">
          { isLoading && isHome ? 
          (<SplashScreen finishLoading={() => setIsLoading(false)}/>) : 
            (
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}}
              >
                {children}
              </motion.div>
            )
          }
        </div>
      </body>
    </html>
  );
}
