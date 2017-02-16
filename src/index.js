import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();


export default {

  pokemon: {
    async allNames() {
      const { results } = await P.getPokemonsList();

      return results.map(({ name, url }) => {
        const parts = [... new Set(url.split('/'))];
        return {
          name,
          id: parts[parts.length - 1]
        }
      });
    },

    async find(idOrName = '') {
      return await P.getPokemonByName(idOrName);
    }
  }

}
