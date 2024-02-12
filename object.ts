
type Person ={name: string, age: number, nickName?: string, getPass?: () => string}
const user: Person  = {
  name: 'Vladislav',
  age: 28
}

const admin: Person = {
  name: 'Mary',
  age: 29,
  getPass(): string {
    return `${this.name}${this.age}`
  }
}

