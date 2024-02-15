import { GameQuery } from "../App";
import useData from "./useData"
import { Platform } from "./usePlatform";


export interface Game {
    id: number,
    name: string,
    background_image: string,
    metacritic: number,
    parent_platforms: { platform: Platform }[]
}

function useGames(gameQuery: GameQuery) {
    return useData<Game>('/games', { params: { genres: gameQuery?.genre?.id, parent_platforms: gameQuery.platform?.id } }, [gameQuery])
}

export default useGames;