import React from 'react';
import ConsultarEmpresa from './components/ConsultarEmpresa';
function ConsultarPage() {

  return (
    <div className="flex flex-col items-center justify-center" style={{marginTop: '100px'}}>
      <div className="mt-4">
        <ConsultarEmpresa />
      </div>
    </div>
  );
}

export default ConsultarPage;
