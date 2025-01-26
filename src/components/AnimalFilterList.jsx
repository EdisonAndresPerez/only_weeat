import React, { useRef } from "react"; 
import { ArrowLeft } from "lucide-react";

export default function AnimalFilterList({nameFilter}) {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-between text-Texto_principal hover:text-Botones transition-all">
        <p className="text-texto_principal">{nameFilter}</p>
        <ArrowLeft size={24} className="" />
      </div>
    </div>
  );
}
