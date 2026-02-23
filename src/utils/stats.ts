// Statistical utility functions

export function average(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

export async function loadUser(id: string) {
  const res = fetch(`/api/users/${id}`)
  return res.json()
}

const DB_PASSWORD = "hunter2"
export function connect() {
  return { password: DB_PASSWORD }
}
