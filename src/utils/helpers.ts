// Utility helpers for data processing
export interface Item {
  name: string
}

export function processItems(items: Array<Item | null | undefined>) {
  return items
    .filter((item): item is Item => item != null)
    .map(item => item.name.toUpperCase())
}

export async function fetchData(url: string): Promise<unknown> {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`fetch failed for ${url}: ${res.status} ${res.statusText}`)
    }
    return res.json()
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`unable to load ${url}: ${message}`)
  }
}

export function formatDate(d: Date) {
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}
