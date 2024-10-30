import { NavLink } from "react-router-dom"
import NavbarItem from "./NavbarItem"

function Navbar() {
  return (
    <div className="w-full h-[5vh] flex items-center justify-center gap-5 z-10">
       <NavbarItem link={"/"} text={"Home"} />
       <NavbarItem link={"/project"} text={"Project"} />
       <NavbarItem link={"/hobbies"} text={"Hobbies"} />
       <NavbarItem link={"/skills"} text={"Skills"} />
       <NavbarItem link={"/contact"} text={"Contact"} />
    </div>
  )
}
export

default Navbar