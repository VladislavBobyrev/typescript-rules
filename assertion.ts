const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
// const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')

const a = (myCanvas as any) as HTMLButtonElement  // Двойное утверждение сначала привести тип к any (или unknown), затем к нужному типу

// Указание ! после выражения означает, что данное выражение не может быть нулевым, т.е. иметь значение null или undefined:
function liveDangerously(x?: number | undefined) {
  // Ошибки не возникает
  console.log(x!.toFixed())
 }