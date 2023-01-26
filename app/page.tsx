import Link from 'next/link'

export default function Home() {
  const links = [
    "blocking-render-with-loading",
    "blocking-render-without-loading",
    "use-hook-with-loading",
    "use-hook-without-loading",
    "use-hook-variable-with-loading",
    "useEffect-hook-with-loading",
    "useEffect-hook-without-loading",
  ];
  return (
    <>
      <ul>
        {links.map(link => 
          <li>
            <Link key={link} href={link}>{link}</Link>
          </li>
        )}
      </ul>
    </>
  )
}
