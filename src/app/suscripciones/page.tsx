import GetSuscripLocal from '@/app/suscripciones/components/GetSuscripciones'
import { CardTitle } from '@/components/ui/card'
import React from 'react'
import GetSuscriCookie from './components/GetSuscripCookie'

function SuscripcionesPage() {
    return (
        <>
            <div className='className="flex-1 space-y-4 p-8 pt-6"'>
                <CardTitle className='flex justify-center items-center py-3'>
                    Escoja una Suscripcion o plan
                </CardTitle>

                {/* <GetSuscripLocal /> */}
                <GetSuscriCookie />
            </div>
        </>
    )
}

export default SuscripcionesPage