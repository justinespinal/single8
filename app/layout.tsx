"use client"

import "@/app/ui/global.css"
import SplashScreen from "./ui/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


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
      { isLoading && isHome ? 
      (<SplashScreen finishLoading={() => setIsLoading(false)}/>) : 
        (
          <>{children}</>
        )
      }
      </body>
    </html>
  );
}
