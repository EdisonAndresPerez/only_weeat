import React from "react";
import Nav from "../../components/Nav";
export default function Home() {
  return (
    <div
      className=" min-h-screen w-full "
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      <Nav />
      <div className="bg-detalles">Home</div>
      <h1>inicio</h1>
    </div>
  );
}
