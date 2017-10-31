// Copying Objects

export const tyler = { name: 'Tyler', age: 35 }

export const brad = { name: 'Brad', age: 34 }

export const tylerAndBradsBaby = Object.assign({}, tyler, brad, { gender: 'Male'})


export const tylerBetter = {
  gender: 'Male',
  ...tyler,
}

export const bradBetter = {
  gender: 'Male',
  ...brad,
}


// export const printsName = ({ name = 'Unknown' } = {}) => 'Hello, ' + name
export const printsName = ({ name = 'Unknown' } = {}) => `Hello, ${name}`




