import ResourcePage from './ResourcePage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Activity' },
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'user', label: 'User' },
]

const fetch = (signal) => fetchCollection('/api/activities/', 'activities', signal)

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      fetchRecords={fetch}
      collectionKey="activities"
      columns={columns}
    />
  )
}
