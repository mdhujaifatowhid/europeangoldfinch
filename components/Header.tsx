import Link from 'next/link'

export default function Header() {
  return (
    <Link href="/" className="banner" aria-label="European goldfinch.net home">
      <img className="bbird" src="/images/bird.png" alt="" />
      <img className="btext" src="/images/logo-text.png" alt="European goldfinch.net" />
    </Link>
  )
}
