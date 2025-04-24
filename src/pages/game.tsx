




import { useEffect } from "react";
import { useJokenpo } from "../context/jogo";
import { useNavigate } from "react-router-dom";


export const Game = () => {
    const { escolha, setScore, setScore2, setWin, score1, score2 } = useJokenpo();
    const jokenpo = ["pedra", "papel", "tesoura"];
    const aleatorio = jokenpo[Math.floor(Math.random() * jokenpo.length)];
    const navigate = useNavigate();
    
    const ResultadoJogo = async () => {
        if (
            (escolha === "pedra" && aleatorio === "tesoura") ||
            (escolha === "tesoura" && aleatorio === "papel") ||
            (escolha === "papel" && aleatorio === "pedra")
        ) {
            await setScore(score1 + 1);
            await setWin("Você ganhou!");
        } else if (escolha === aleatorio) {
            await setWin("Empate!");
        } else {
            setScore2(score2 + 1);
            await setWin("Máquina ganhou!");
        }

        return 1;
    };

    useEffect(() => {
      ResultadoJogo();
   
    }, []);

    const Zerarwin = async () => {
        await setWin("");
        navigate('/');
    };

    return (
        <>
            <div className="h-full flex items-center justify-center mt-30">
                <div className="flex items-center justify-center">
                  <button onClick={Zerarwin} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                      Play again
                  </button>
                </div>
            </div>
        </>
    );
}
