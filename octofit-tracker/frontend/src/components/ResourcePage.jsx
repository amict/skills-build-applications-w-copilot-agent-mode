import { useEffect, useState } from 'react'

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }
  if (Array.isArray(value)) {
    return value.length ? value.map(formatValue).join(', ') : '—'
  }
  if (typeof value === 'object') {
    return value.name ?? value.email ?? value._id ?? JSON.stringify(value)
  }
  return String(value)
}

export default function ResourcePage({ title, fetchRecords, collectionKey, columns }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecords() {
      setLoading(true)
      setError('')

      try {
        setRecords(await fetchRecords(controller.signal))
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadRecords()
    return () => controller.abort()
  }, [collectionKey, fetchRecords])

  return (
    <section aria-labelledby="resource-title">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 id="resource-title" className="h3 mb-0">{title}</h2>
        {!loading && !error && (
          <span className="badge text-bg-secondary">
            {records.length} {records.length === 1 ? 'record' : 'records'}
          </span>
        )}
      </div>

      {loading && <p role="status">Loading {title.toLowerCase()}…</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {!loading && !error && records.length === 0 && (
        <div className="alert alert-info" role="status">No {title.toLowerCase()} found.</div>
      )}
      {!loading && !error && records.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                {columns.map(({ label }) => <th key={label} scope="col">{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id ?? record.id ?? `${collectionKey}-${index}`}>
                  {columns.map(({ key }) => (
                    <td key={key}>{formatValue(record[key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
