import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-black border-t px-4">
        <div className="mx-auto max-w-4xl flex flex-row justify-between items-center h-14">
          <p className="text-muted text-xs text-center">© Rights Reserved by {" "}
            <Link href={"/"} className="hover:text-white/75 transition-all duration-300 underline">
              Bloggy
            </Link>
          </p>
          <p className="text-muted text-xs text-center">Made by {" "}
            <Link href={"https://github.com/cold-labs"} className="hover:text-white/75 transition-all duration-300 underline" target="_blank">
              ColdLabs
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Footer