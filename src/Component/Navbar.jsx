import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full h-6 flex items-center justify-center gap-5">
       <NavLink to={"/"} className={"font-semibold text-xl hover:bg-white/30 hover:backdrop-brightness-50 hover:backdrop-blur-xl rounded p-1 transition-all"}>
          Home
       </NavLink>
       <NavLink to={"/project"} className={"font-semibold text-xl hover:bg-white/30 hover:backdrop-brightness-50 hover:backdrop-blur-xl rounded p-1 transition-all"}>
          Project
       </NavLink>
    </div>
  )
}
export

default Navbar