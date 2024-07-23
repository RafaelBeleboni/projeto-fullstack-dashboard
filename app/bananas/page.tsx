'use client'

import { useState } from 'react'

export default function Page() {
    type BananaType = {
        grossura: string;
        comprimento: number
      }
      const bananas: any[]  = [
        {grossura: 'pequena', comprimento: 10},
        {grossura: 'grande', comprimento: 20},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'media', comprimento: 15},
        {grossura: 'pequena', comprimento: 5},
      ]

      const mandiocas:any[] = [
        {tipo: 'mandioquinha', bg: 'bg-yellow-500', width: '[1rem]'},
        {tipo: 'mandiocona', bg: 'bg-red-100', width: '[1rem]'},
        {tipo: 'mandioqueta', bg: 'bg-green-300', width: '[1rem]'},
      ]

     const listasCombinadas =[
        ...bananas,
        ...mandiocas,
     ]
  

    const [isClickedBanana, setClickedB] = useState(false)
    const handleClickB = () => {
        setClickedB(!isClickedBanana);
        console.log(isClickedBanana)
    }


    const [isClickedMandioca, setClickedM] = useState(false)
    const handleClickM = () => {
        setClickedM(!isClickedMandioca);
        console.log(isClickedMandioca)
        
    }



    return (
        <main>
            <div className="flex flex-col items-center">
            <button onClick={handleClickB} className="mb-4 p-2 bg-blue-500 text-white">BANANAS</button>
            {isClickedBanana && 
                        listasCombinadas.map((objeto, index) => (
                            <div key={index}>
                                      <div>
                                        {objeto.grossura && <p>BANANA: {objeto.grossura}</p>}
                                      </div>
                            </div>
                        ))}


            
            <button onClick={handleClickM} className="mb-4 p-2 bg-blue-500 text-white">MANDIOCAS</button>
            {isClickedMandioca && 
                listasCombinadas.map((objeto:any, index:number) => (
                    <div key={index}>
                          <div className={`w-${objeto.width} ${objeto.bg}`}>
                            {objeto.bg && <p>MANDIOCA: {objeto.tipo}</p>}
                          </div>
                    </div>
            ))}
    </div>
        </main>

    )
}
