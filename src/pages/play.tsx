

import { useNavigate } from "react-router-dom"
import Pedra from "../assets/gesto-de-punho-mão-fechada-símbolo-ilustração-do-vetor-ícone-contorno-braço-193651843.webp"
import Tesoura from "../assets/png-transparent-computer-icons-scissors-hand-scissors-text-hand-technic.png"
import Papel from "../assets/rock-paper-scissors-296855_1280.webp"
import { useJokenpo } from "../context/jogo"
export const Play = () =>{

    const { setEscolha } = useJokenpo();
    const navigate = useNavigate();

    const jokenpo = [
        {id : 1,escolha : 'pedra' , imagem : Pedra},
        {id : 2,escolha : 'papel' , imagem : Papel},
        {id : 3,escolha : 'tesoura' , imagem : Tesoura},
    ];

    const handleEscolha = async (escolha:string) =>{

      
        await setEscolha(escolha)
        navigate('/game');
    }

    return (
        <>
            <div className="flex items-center justify-center mt-30">
            
                {jokenpo.map((item) => (
                    <div className="py-10" key={item.id}>
                        <button onClick={() => handleEscolha(item.escolha)}>
                            <img src={item.imagem} alt={item.escolha} className="w-30 h-30"/>    

                        </button>

                    </div>
                ))}
                
             
                
            </div>

        
        </>

    )
}