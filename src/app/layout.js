import './globals.css'
import { Patrick_Hand } from 'next/font/google'
import {Emoji} from '@components/Emoji'
import Link from 'next/link'

const font = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
})

const headerClasses = 'flex justify-between items-center h-20 p-10'

const wrapperClasses = 'flex flex-col h-screen w-screen'

const mainClasses = 'flex h-0.8'

export default function MainLayout({ children }) {
    return <div className={font.className}>
      <div className={wrapperClasses}>
      <Header />
      <main className={mainClasses}>{children}</main>
      <footer className='bg-red-500'>Footer</footer>
      </div>
    </div>
}

const Header = ()=>{
  return <header className={headerClasses}>
    <h1 className='font-large'>Welcome to <b>Nandir</b>'s <Emoji symbol={'🌸'} />  corner ... </h1>
    <div className='flex flex-row'>
    <NavItem emoji={"✨"}>Blogs</NavItem>
    <NavItem emoji={"✨"}>Projects</NavItem>
    <NavItem emoji={"✨"}>About me</NavItem>
    </div>
    </header>
}

const borderBox = 'px-5 h-12 border-gray-800 m-1 border-2 rounded-lg border-b-4 flex items-center active:border-b-2 highlight focus:outline-none focus:bg-gray-300'

const NavItem = ({emoji, children})=>{
  return <Link className={borderBox} href='./'>
     <Emoji symbol={emoji} size={25} />
    {children}</Link>
}