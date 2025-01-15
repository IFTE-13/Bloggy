import { siteName } from "@/lib/constants"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black border-t">
        <MaxWidthWrapper>
            <div className="flex flex-row justify-between items-center h-14">
              <p className="text-muted-foreground text-xs text-center">© Rights Reserved by {" "}
                <Link href={"/"} className="hover:text-white/75 transition-all duration-300 underline">
                  {siteName}
                </Link>
              </p>
              <p className="text-muted-foreground text-xs text-center">Made by {" "}
                <Link href={"https://github.com/cold-labs"} className="hover:text-white/75 transition-all duration-300 underline" target="_blank">
                  ColdLabs
                </Link>
              </p>
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Footer