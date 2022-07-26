import { createContext, useState } from "react";

export const NavToggleContext = createContext()


export const NavToggleContextProvider = ({children}) => {
  const [open, setOpen] = useState(false)

  return <NavToggleContext.Provider value={{open, setOpen}}>
    {children}
  </NavToggleContext.Provider>
}
