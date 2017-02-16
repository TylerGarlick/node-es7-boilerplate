import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();


export default {

  pokemon: {

    /**
     * Retrieves all the pokemon with their name, and id
     *
     * @public
     *
     * @returns {Promise.<{name, id}>}
     */
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

    /**
     * Finds a pokemon by id or name
     *
     * @public
     *
     * @param {String} idOrName - an id or name
     * @returns {Promise.<*>}
     */
    async find(idOrName = '') {
      return await P.getPokemonByName(idOrName);
    }
  },

  items: {}
}
