
import Link from "next/link";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <h1>Simple app ver 1.0</h1>
          <hr />
          <Link href="/">home</Link> &nbsp;
          <Link href="/about">about</Link> &nbsp;
          <Link href="/feedback">feedback</Link> &nbsp;

          &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link href="/profile/rahul">Rahul's</Link> &nbsp; &nbsp; &nbsp; 
          <Link href="/profile/mamta">Mamta's</Link> &nbsp; &nbsp; &nbsp;
          <Link href="/profile/suneel">Suneel's</Link> &nbsp; &nbsp; &nbsp;
          <Link href="/users">AllUsers</Link>
          
          <hr />
          
          {children}
          
      </body>
    </html>
  )
}
