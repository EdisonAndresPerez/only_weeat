import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const routes = [
    {
      name: "Collection",
      path: "/Coleccion",
    },
    {
      name: "Inicio",
      path: "/Inicio",
    },
    {
      name: "¿Quien soy?",
      path: "/Quien-soy",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="h-24 w-full border-b border-black flex flex-row justify-between items-center px-4 md:px-10">
        {/* Enlaces generados dinámicamente */}
        <div className="flex flex-row gap-3 text-xl">
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className="flex flex-row gap-3 text-xl hover:bg-Botones hover:text-white transition-colors duration-300 p-2 rounded-lg"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Logo o nombre de la tienda */}
        <div className="">
          <p className="text-2xl">Only_weat</p>
        </div>

        {/* Icono del carrito */}
        <div className="flex flex-row gap-3">
          <div className="w-14 aspect-square flex items-center justify-center bg-Botones rounded-full">
            <ShoppingBasket className="xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}
