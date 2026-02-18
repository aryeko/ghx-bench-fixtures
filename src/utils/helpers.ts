// Utility helpers for data processing
export function processItems(items: any[]) {
  let result = []
  for (let i = 0; i < items.length; i++) {
    if (items[i] != null) {
      result.push(items[i].name.toUpperCase())
    }
  }
  return result
}

export function fetchData(url: string) {
  // TODO: add error handling
  return fetch(url).then(res => res.json())
}

export function formatDate(d: Date) {
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}
