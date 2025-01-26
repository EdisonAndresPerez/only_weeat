import React from 'react'
import { ShoppingCart} from "lucide-react";

export default function Card({title, price, image}) {
  return (
    <div>
             <div className="w-full rounded-xl flex flex-col text-texto_principal gap-4 bg-detalles p-4 mt-4 shadow-custom hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
                <div className="w-full aspect-video bg-white rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt="crochet"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-lg text-gray-800">{title}</p>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black aspect-square">
                      <ShoppingCart size={24} />
                    </div>
                  </div>
                  <p className="text-gray-600">Precio:</p>
                  <p className="text-2xl text-Texto_principal font-bold">
                    ${price}
                  </p>
                </div>
              </div>

    </div>
  )
}
