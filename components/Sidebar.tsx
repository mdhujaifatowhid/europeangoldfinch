import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="side">
      <h4>About the site:</h4>
      <p>This site is dedicated to fans of the <b>European Gold Finch (EGF)</b>, or <i>Carduelis carduelis</i> as they are known in the scientific community.</p>
      <h4>FAQ:</h4>
      <p>What is a <b>European Gold Finch?</b></p>
      <p>The EGF is a small passerine bird of the <b>finch family</b>. The EGF is approximately <b>11-13.5 cm (4-5 inches) long</b> and <b>weighs 16 to 22 grams</b>. Sexes are alike, with a red face, black and snowy white heads, brown and white breast upperparts and black wings with yellow flares. They are simply beautiful!</p>
      <Link href="/faq" className="more">FOR MORE EGF FACTS, READ THE FAQ HERE!</Link>
    </aside>
  )
}
