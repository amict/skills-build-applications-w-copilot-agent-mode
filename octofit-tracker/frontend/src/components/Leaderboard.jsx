import ResourcePage from './ResourcePage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Leaderboard' },
  { key: 'user', label: 'User' },
  { key: 'score', label: 'Score' },
]

const fetch = (signal) => fetchCollection('/api/leaderboard/', 'leaderboard', signal)

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      fetchRecords={fetch}
      collectionKey="leaderboard"
      columns={columns}
    />
  )
}
