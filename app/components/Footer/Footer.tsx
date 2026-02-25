import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto p-15 mobile:p-4 pb-4 mt-40">
      <div className="w-full h-72 bg-ag-magent rounded-3xl mobile:rounded-xl p-10 flex justify-end mobile:justify-center">
        <img
          src="/images/black-logo.png"
          alt="logo"
          className="h-32 tablet:h-24 mobile:h-18"
        />
      </div>
      <div className="w-38/40 tablet:w-36/40 mobile:w-34/40 m-auto bg-ag-magent h-5 mobile:h-3 flex items-center justify-center">
        <div className="w-38/40 h-px border-t border-dashed"></div>
      </div>
      <div className="w-full h-72 mobile:h-auto bg-ag-magent rounded-3xl mobile:rounded-xl p-2 flex justify-end">
        <div className="w-full h-full flex flex-row mobile:flex-col mobile:gap-5 justify-between border-3 border-black rounded-2xl p-10 text-black mobile:text-center mobile:text-sm font-light">
          <div>
            <p>Artes Group</p>
            <p>Buenos Aires - Argentina</p>
            <p className="text-xl mobile:text-base font-bold">
              ©{new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-row mobile:flex-col gap-5">
            <div className="flex flex-col gap-4 tablet:gap-0">
              <p className="text-xl mobile:text-base font-bold">CONTACTO</p>
              <p>Av. Dorrego 1789 Of. 402</p>
              <p>(CP 1414) B.A., Argentina.</p>
              <p>Av. Dorrego 1789 Of. 402</p>
              <p>recepcion@artesgroup.com.ar</p>
            </div>
            <div className="flex flex-col gap-4 tablet:gap-0">
              <p className="text-xl mobile:text-base font-bold">REDES</p>
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
