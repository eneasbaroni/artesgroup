import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto p-15 pb-4 mt-40">
      <div className="w-full h-72 bg-ag-magent rounded-3xl p-10 flex justify-end">
        <img src="/images/black-logo.png" alt="logo" className="h-32" />
      </div>
      <div className="w-38/40 m-auto bg-ag-magent h-5 flex items-center justify-center">
        <div className="w-38/40 h-px border-t border-dashed"></div>
      </div>
      <div className="w-full h-72 bg-ag-magent rounded-3xl p-2 flex justify-end">
        <div className="w-full h-full flex flex-wor justify-between border-3 border-black rounded-2xl p-10 text-black font-light">
          <div>
            <p>Artes Group</p>
            <p>Buenos Aires - Argentina</p>
            <p className="text-xl font-bold">©2024</p>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">CONTACTO</p>
              <p>Av. Dorrego 1789 Of. 402</p>
              <p>(CP 1414) B.A., Argentina.</p>
              <p>Av. Dorrego 1789 Of. 402</p>
              <p>recepcion@artesgroup.com.ar</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">REDES</p>
              <p>Instagram</p>
              <p>Facebok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
