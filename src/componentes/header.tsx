import { useJokenpo } from "../context/jogo";
export const Header = ()  =>{

    const { score1,score2,win } = useJokenpo();
    return (
        <>
            <div className="bg-blue-500 p-6">
                <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-12 block   md:flex md:justify-between md:items-center">                        
                        <h1 className="font-bold text-2xl text-white">QUEM GANHOU: {win} </h1>                            
                        <h1 className="text-white text-2xl">SEUS PONTOS: {score1}</h1> 
                        <h1 className="text-white text-2xl">MÁQUINA: {score2} </h1> 
                    </div>
                    
                </div>
            </div>
        </>

    )
}