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
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }
    return response.json()
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`fetchData failed: ${message}`)
  }
}

export function formatDate(d: Date) {
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}
