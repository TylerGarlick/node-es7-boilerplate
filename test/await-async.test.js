import Test from 'ava';
import Assignment from '../src';


Test(`#allNames() retrieves all 811 pokemon in their proper format { id, name }`, async t => {
  const pokemon = await Assignment.pokemon.allNames();
  t.is(pokemon.length, 811);

  const first = pokemon[0];
  t.truthy(first.id);
  t.truthy(first.name);
});


Test(`#byId can get a pokemon by id and name`, async t => {
  const name = 'eevee';
  const id = 133;

  t.truthy(await Assignment.pokemon.find(id));
  t.truthy(await Assignment.pokemon.find(name));
});
