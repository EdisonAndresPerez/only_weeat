import { Filter, ArrowLeft, Search } from "lucide-react";
import { useState, useRef } from "react";
import logoIsa from "../../assets/logoIsa.png";
import { useSwipeable } from "react-swipeable";

import Nav from "../../components/Nav";
import Card from "../../components/Card";
import AnimalFilterList from "../../components/AnimalFilterList";
import SearchBar from "../../components/SearchBar";
import HorizontalScrollList from "../../components/HorizontalScrollList";

export default function Collection() {
  const animalesFilter = [
    "Vaca",
    "Perro",
    "Gato",
    "Conejo",
    "Cerdo",
    "Gallina",
    "Pato",
    "Pez",
    "Tortuga",
    "Serpiente",
    "Elefante",
    "Jirafa",
    "León",
    "Tigre",
    "Cebra",
    "Mono",
    "Oso",
  ];

  //const videoJuegosFilter = ["Mario", "Zelda", "Pokémon", "Sonic"];
  //const animeFilter = ["Naruto", "One Piece", "Dragon Ball", "Attack on Titan"];
  return (
    <>
      <main
        className=" min-h-screen w-full "
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        <Nav />

        {/* seccion 1 */}
        <section className="px-12 py-8 grid grid-cols-4 gap-4">
          <div className="w-full bg-detalles rounded-2xl flex flex-col gap-4 p-4">
            <div className="flex flex-row gap-4">
              <Filter size={24} className="text-Botones " />
              <p className="text-texto_principal">Filtraciones</p>
            </div>

            {/* filtar seccion */}
            <AnimalFilterList nameFilter="Animales" />
            <AnimalFilterList nameFilter="Video Juegos" />
            <AnimalFilterList nameFilter="Anime" />
          </div>

          <div className="col-span-3 flex flex-col">
            <div className="flex flex-row justify-between">
              {/* Barra de busqueda*/}
              <SearchBar />
            </div>

            {/* seccion de scroll horizontal */}
            <HorizontalScrollList items={animalesFilter} />

            <div
              className="w-full rounded-3xl relative flex items-center p-10 overflow-hidden mt-4 col-span-3 flex-col"
              style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2021/02/12/22/39/wool-6009858_960_720.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <h2 className="text-4xl font-extrabold text-white relative z-10 brightness-125">
                Bienvenido a la tienda <br />
                Only_weat
              </h2>
              <img
                src={logoIsa}
                alt="Logo"
                className="absolute size-80 object-contain right-0 top-1/2 transform -translate-y-1/3"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card
                title="Conejo en crochet"
                image="https://cdn.pixabay.com/photo/2016/03/28/19/54/easter-bunny-1286805_960_720.jpg"
                price="29.999"
              />
              <Card
                title="Osito en crochet"
                image="https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg"
                price="35.999"
              />
              <Card
                title="Osito en crochet"
                image="https://cdn.pixabay.com/photo/2014/10/01/16/08/crochet-468745_960_720.jpg"
                price="30.999"
              />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
