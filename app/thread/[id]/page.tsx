import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSupabase, type Thread } from '@/lib/supabase'
import { fmtDate, fmtTime } from '@/lib/format'

export const dynamic = 'force-dynamic'

export default async function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id)
  if (!Number.isInteger(id)) notFound()
  const { data } = await getSupabase().from('threads').select('*').eq('id', id).maybeSingle<Thread>()
  if (!data) notFound()

  return (
    <>
      <div className="page"><Link href="/">&laquo; Back to topics</Link></div>
      <table>
        <colgroup><col className="c1" /><col className="c2" /><col className="c3" /></colgroup>
        <thead><tr><th>TOPIC</th><th>USER ID</th><th>POSTED</th></tr></thead>
        <tbody>
          <tr className="hi"><td><b>{data.topic}</b></td><td>{data.user_id}</td><td>{fmtDate(data.created_at)} {fmtTime(data.created_at)}</td></tr>
        </tbody>
      </table>
      <div className="post">{data.body}</div>
    </>
  )
}
