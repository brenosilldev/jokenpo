import { create } from "zustand";

interface JokenpoStore {
    score1: number;
    score2: number;
    win: string;
    escolha: string;
    setScore: (score: number) => void;
    setScore2: (score2: number) => void;
    setWin: (win: string) => void;
    setEscolha: (escolha: string) => void;
}

export const useJokenpo = create<JokenpoStore>((set) => ({
    score1: 0,
    score2: 0,
    win: '',
    setScore: (score:number) => set({score1: score} ),
    setScore2: (score2:number) => set({score2: score2} ),
    setWin: (win:string) => set({win: win} ),
    escolha: '',
    setEscolha: async (escolha:string) => { set({escolha: escolha} ) },
}));