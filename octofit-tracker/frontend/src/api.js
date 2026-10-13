const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const isValidCodespaceName = /^[a-zA-Z0-9-]+$/.test(codespaceName ?? '')

export const apiBase = isValidCodespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function findCollection(payload, collectionKey, visited = new Set()) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object' || visited.has(payload)) {
    return undefined
  }
  visited.add(payload)

  for (const key of [collectionKey, 'results', 'items', 'data']) {
    const collection = findCollection(payload[key], collectionKey, visited)
    if (collection) {
      return collection
    }
  }

  return undefined
}

export async function fetchCollection(endpoint, collectionKey, signal) {
  const response = await fetch(`${apiBase}${endpoint}`, { signal })
  if (!response.ok) {
    throw new Error(`Request failed (${response.status} ${response.statusText})`)
  }

  const payload = await response.json()
  const collection = findCollection(payload, collectionKey)
  if (!collection) {
    throw new Error(`The ${collectionKey} response did not contain a list of records.`)
  }

  return collection
}
