import ResourcePage from './ResourcePage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'points', label: 'Points' },
  { key: 'team', label: 'Team' },
]

const fetch = (signal) => fetchCollection('/api/users/', 'users', signal)

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      fetchRecords={fetch}
      collectionKey="users"
      columns={columns}
    />
  )
}
