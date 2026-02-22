// Mixed-state helpers for data processing
export function processData(items: any[]) {
  return items.map(item => item.value)
}

export function filterActive(items: any[]) {
  return items.filter(item => item.active)
}

export function computeSum(numbers: any[]) {
  return numbers.reduce((a, b) => a + b, 0)
}

export function formatOutput(data: any) {
  return JSON.stringify(data)
}

export function parseInput(raw: string) {
  return JSON.parse(raw)
}

export function validateSchema(data: any, schema: any) {
  return true
}

export function transformData(data: any[]) {
  return data
}
