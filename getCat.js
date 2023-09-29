import { api } from "./Api";

export default async function getCat(breed) {
    try {
        const response = await api.get(`/images/search?limit=4&api_key=live_udRx202ynQhPjOqjwX5gNO0QFDL7fEOVbZfhgdXw76HtoywgXnnpOlxnciGg2qfA&/breeds/${breed}`);
        
        if (response.status === 200) {
            const data = response.data;
            
            if (Array.isArray(data) && data.length > 0) {
                return { url: data[0].url };
            } else {
                console.error("Nenhuma imagem encontrada para a raça:", breed);
                return 
            }
        } else {
            console.error("Erro na resposta da API:", response.status);
            return
        }
    } catch (error) {
        console.error("Erro ao buscar gato:", error);
        return
    }
}
