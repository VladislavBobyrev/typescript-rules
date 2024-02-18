function greeter (fn: (a: string) => void)

function printToConsole(s: string) {
  console.log(s)
}
greeter(printToConsole)


type ABC = { a: number, b: number, c: number }
function sum({ a, b, c }: ABC) {
  console.log(a + b + c)
}