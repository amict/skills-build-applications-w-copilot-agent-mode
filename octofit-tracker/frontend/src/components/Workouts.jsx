import ResourcePage from './ResourcePage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Duration (min)' },
]

const fetch = (signal) => fetchCollection('/api/workouts/', 'workouts', signal)

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      fetchRecords={fetch}
      collectionKey="workouts"
      columns={columns}
    />
  )
}
