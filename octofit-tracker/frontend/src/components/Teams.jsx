import ResourcePage from './ResourcePage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'coach', label: 'Coach' },
  { key: 'members', label: 'Members' },
  { key: 'score', label: 'Score' },
]

const fetch = (signal) => fetchCollection('/api/teams/', 'teams', signal)

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      fetchRecords={fetch}
      collectionKey="teams"
      columns={columns}
    />
  )
}
