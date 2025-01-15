import { siteName } from "@/lib/constants"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black border-t">
        <MaxWidthWrapper>
            <div className="flex flex-row justify-between">
              <p className="text-white h-12 py-4 font-extralight text-xs text-center">© Rights Reserved by {" "}
                <Link href={"/"} className="hover:text-white/75 transition-all duration-300">
                  {siteName}
                </Link>
              </p>
              <p className="text-white h-12 py-4 font-extralight text-xs text-center">Made by {" "}
                <Link href={"/"} className="hover:text-white/75 transition-all duration-300">
                  XYs
                </Link>
              </p>
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Footer