import React, { useContext, createContext, useState } from "react"

const menuContext = createContext()

const MenuProvider = ({ children }) => {
	const menu = useState(1)
	return <menuContext.Provider value={menu}>{children}</menuContext.Provider>
}

// Retorna state e dispatch
const useMenu = () => useContext(menuContext)

export { MenuProvider as default, useMenu }
