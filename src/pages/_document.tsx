import { NavbarDefault } from '@/components/Layout/Navbar'
import { SidebarWithContentSeparator } from '@/components/Layout/Sidebar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className='flex items-center sticky top-0 z-50'>
          <NavbarDefault />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
