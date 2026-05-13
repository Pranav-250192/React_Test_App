import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  const status = count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'

  return (
    <div className={styles.card}>
      <p className={styles.label}>Counter</p>
      <div className={styles.row}>
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <span className={styles.count}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(0)} className={styles.reset}>Reset</button>
      </div>
      <p className={styles.status}>
        Status: <span className={`${styles.badge} ${styles[status]}`}>{status}</span>
      </p>
    </div>
  )
}
