import { useState } from 'react'
import styles from './FormTest.module.css'

export default function FormTest() {
  const [fields, setFields] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!fields.name || !fields.email) return
    setSubmitted({ ...fields })
    setFields({ name: '', email: '' })
  }

  const isValid = fields.name.trim() && fields.email.trim()

  return (
    <div className={styles.card}>
      <p className={styles.label}>Form Test</p>
      <div className={styles.form}>
        <input
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} disabled={!isValid}>
          Submit
        </button>
      </div>

      {submitted && (
        <div className={styles.success}>
          ✓ Submitted: <strong>{submitted.name}</strong> ({submitted.email})
        </div>
      )}
    </div>
  )
}
