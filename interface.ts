interface IAnimal {
  name: string
}

interface IAnimal {
  addres: string
}

interface IBear extends IAnimal {
  age?: number
}

const bear:IBear = {name:'Vladislav',addres: 'Belgorod'}
bear.age = 28



interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;



interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}


interface NumberOrStringDictionary {
  [index: string]: number | string
  length: number // ok, `length` - это число
  name: string // ok, `name` - это строка
}


type StrNumPair = [string, number] //кортеж


interface StringNumberPair {
  // Конкретные свойства
  length: 2
  0: string
  1: number

  // Другие поля 'Array<string | number>'
  slice(start?: number, end?: number): Array<string | number>
}

function identity<Type>(arg: Type): Type {
  return arg
}