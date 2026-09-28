'use client'
import { useActionState } from 'react'
import Link from 'next/link'
import { addTopic } from '@/app/new/actions'

export default function AddTopicForm() {
  const [state, action, pending] = useActionState(addTopic, {})
  return (
    <form action={action}>
      <table className="formtable">
        <colgroup><col className="c1" /><col /></colgroup>
        <thead><tr><th colSpan={2}>ADD TOPIC</th></tr></thead>
        <tbody>
          <tr><td className="lbl">Topic</td><td><input name="topic" maxLength={100} required /></td></tr>
          <tr><td className="lbl">User ID</td><td><input name="user_id" maxLength={30} required /></td></tr>
          <tr><td className="lbl">Message</td><td><textarea name="body" rows={7} maxLength={1000} required /></td></tr>
        </tbody>
      </table>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {state?.error && <p className="err">{state.error}</p>}
      <div className="actions">
        <button className="btn" disabled={pending}>{pending ? 'Posting...' : 'POST TOPIC'}</button>
        <Link href="/" className="btn ghost">CANCEL</Link>
      </div>
    </form>
  )
}
