import React from 'react';
import ConsultarEmpresa from './components/ConsultarEmpresa';

function ConsultarPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl py-2 font-semibold">Consulta tu empresa</h1>
      <div className="mt-4">
        <ConsultarEmpresa />
      </div>
    </div>
  );
}

export default ConsultarPage;
