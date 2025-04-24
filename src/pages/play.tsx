import { useNavigate } from "react-router-dom"
import { useJokenpo } from "../context/jogo"
import { FaScissors } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { FaHandRock  } from "react-icons/fa";
export const Play = () =>{

    const { setEscolha } = useJokenpo();
    const navigate = useNavigate();

    const jokenpo = [
        {id : 1,escolha : 'pedra' , icone :  <FaHandRock  size={38} color="black"/>},
        {id : 2,escolha : 'papel' , icone : <FaHandPaper size={38}/>},
        {id : 3,escolha : 'tesoura' , icone : <FaScissors size={38}/>},
    ];

    const handleEscolha = async (escolha:string) =>{
        await setEscolha(escolha)
        navigate('/game');
    }

    return (
        <>
            <div className="h-full flex items-center justify-center mt-30">            
                {jokenpo.map((item) => (
                    <div className="py-10 m-10 " key={item.id}>
                        <button onClick={() => handleEscolha(item.escolha)} >
                            <span className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                                {item.icone}
                            
                            </span>    

                        </button>

                    </div>
                ))}
            </div>
        </>

    )
}