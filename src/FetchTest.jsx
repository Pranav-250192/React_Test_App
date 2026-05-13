import { useState } from 'react'
import styles from './FetchTest.module.css'

export default function FetchTest() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUser = async () => {
    setLoading(true)
    setError(null)
    setData(null)
    const id = Math.floor(Math.random() * 10) + 1
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (!res.ok) throw new Error('Network response was not ok')
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.card}>
      <p className={styles.label}>Fetch Test</p>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? 'Loading…' : 'Fetch Random User'}
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {data && (
        <div className={styles.result}>
          {[
            ['Name', data.name],
            ['Email', data.email],
            ['Phone', data.phone],
            ['City', data.address?.city],
            ['Company', data.company?.name],
          ].map(([key, val]) => (
            <div key={key} className={styles.row}>
              <span className={styles.key}>{key}</span>
              <span className={styles.val}>{val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
