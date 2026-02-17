// Utility helpers for data processing
export interface Item {
  name: string
}

export function processItems(items: Array<Item | null | undefined>) {
  const cleaned = items.filter((item): item is Item => Boolean(item))
  return cleaned.map(item => item.name.toUpperCase())
}

export async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`fetchData ${url} failed with status ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error(`fetchData ${url} failed: ${String(error)}`)
  }
}

export function formatDate(d: Date) {
  return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
}
