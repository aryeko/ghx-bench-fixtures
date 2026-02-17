// Utility helpers for data processing
type Item = {
  name: string
}

export function processItems(items: Array<Item | null | undefined>): string[] {
  return items
    .filter((item): item is Item => item != null)
    .map(item => item.name.toUpperCase())
}

export async function fetchData(url: string): Promise<unknown> {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw new Error(`Failed to fetch data from ${url}: ${message}`)
  }
}

export function formatDate(d: Date) {
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}
