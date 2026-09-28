import Link from 'next/link'
import { getSupabase } from '@/lib/supabase'
import { fmtDate } from '@/lib/format'

export const dynamic = 'force-dynamic'
const PER_PAGE = 15

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const p = Math.max(1, parseInt((await searchParams).page ?? '1') || 1)
  const { data, count, error } = await getSupabase()
    .from('threads').select('id, topic, user_id, created_at', { count: 'exact' })
    .order('id', { ascending: false }).range((p - 1) * PER_PAGE, p * PER_PAGE - 1)
  const pages = Math.max(1, Math.ceil((count ?? 0) / PER_PAGE))

  return (
    <>
      <div className="page">
        <span>Page {p}{pages > 1 && ` of ${pages}`}</span>
        <span className="pager">
          {p > 1 && <Link href={`/?page=${p - 1}`}>&laquo; Prev</Link>}
          {p < pages && <Link href={`/?page=${p + 1}`}>Next &raquo;</Link>}
          <Link href="/new" className="btn">ADD TOPIC</Link>
        </span>
      </div>
      {error && <p className="err">Could not load topics: {error.message}</p>}
      <table>
        <colgroup><col className="c1" /><col className="c2" /><col className="c3" /><col className="c4" /></colgroup>
        <thead><tr><th>TOPIC</th><th>USER ID</th><th>POSTED</th><th></th></tr></thead>
        <tbody>
          {data?.map((t) => (
            <tr key={t.id}>
              <td><Link href={`/thread/${t.id}`}>{t.topic}</Link></td>
              <td>{t.user_id}</td>
              <td>{fmtDate(t.created_at)}</td>
              <td className="ic"><img src="/images/icon.png" width={16} height={19} alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
