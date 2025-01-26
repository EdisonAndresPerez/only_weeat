import React from 'react'
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
          <div className="rounded-lg min-w-80 bg-detalles p-4 justify-start items-center flex flex-row gap-4">
                <Search size={24} className="text-Botones " />
                <input
                  type="text"
                  className=" bg-transparent border-none w-full focus:outline-none"
                  placeholder="Buscar Animal"
                />
              </div>
    </div>
  )
}
