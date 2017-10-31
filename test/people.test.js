import Test from 'ava'

import { tyler, brad, printsName } from '../src'


Test(`Tyler object has proper values`, t => {
  t.is(tyler.name, 'Tyler')
  t.is(tyler.age, 35)
})


Test(`Brad object has proper values`, t => {
  t.is(brad.name, 'Brad')
  t.is(brad.age, 34)
})


Test(`print name prints out a name properly`, t => {
  t.is(printsName(brad), `Hello, Brad`)
  t.is(printsName(tyler), `Hello, Tyler`)
  t.is(printsName(), `Hello, Unknown`)
})
