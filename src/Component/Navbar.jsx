import { NavLink } from "react-router-dom"
import NavbarItem from "./NavbarItem"

function Navbar() {
  return (
    <div className="w-full h-6 flex items-center justify-center gap-5">
       <NavbarItem link={"/"} text={"Home"} />
       <NavbarItem link={"/projet"} text={"Project"} />
    </div>
  )
}
export

default Navbar