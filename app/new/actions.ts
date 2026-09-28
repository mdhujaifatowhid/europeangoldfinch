'use server'
import { redirect } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'

export async function addTopic(_prev: { error?: string }, fd: FormData): Promise<{ error?: string }> {
  if (fd.get('website')) return { error: 'Spam detected.' } // honeypot field
  const topic = String(fd.get('topic') ?? '').trim()
  const user_id = String(fd.get('user_id') ?? '').trim()
  const body = String(fd.get('body') ?? '').trim()

  if (topic.length < 3 || topic.length > 100) return { error: 'Topic must be 3-100 characters.' }
  if (!/^[A-Za-z0-9_.-]{2,30}$/.test(user_id)) return { error: 'User ID: 2-30 letters, numbers, _ . - only.' }
  if (!body || body.length > 1000) return { error: 'Message must be 1-1000 characters.' }

  const { data, error } = await getSupabase().from('threads').insert({ topic, user_id, body }).select('id').single()
  if (error || !data) return { error: 'Could not save your topic. Please try again.' }
  redirect(`/thread/${data.id}`)
}
