// Dates are shown in UTC so server and browser always agree.
export const fmtDate = (s: string) =>
  new Date(s).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', timeZone: 'UTC' })

export const fmtTime = (s: string) =>
  new Date(s).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'UTC' })
    .replace(' ', '').toLowerCase()
