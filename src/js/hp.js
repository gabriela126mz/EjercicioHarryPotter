//API pública
//devuelve personajes
export const getHPCharacters = async () =>{
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();
    return data;
};

//devuelve hechizos
export const getHPSpells = async () =>{
    const response = await fetch('https://hp-api.onrender.com/api/spells');
    const data = await response.json();
    return data;
};