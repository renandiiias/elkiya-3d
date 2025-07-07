'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#collections', label: 'Collections' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#partners', label: 'Partners' },
  { href: '#events', label: 'Events' },
  { href: '#faq', label: 'FAQ' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link 
      href={href} 
      onClick={() => setIsOpen(false)} 
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );

  const MobileNavLink = ({ href, label }: { href: string; label:string }) => (
     <Link 
      href={href} 
      onClick={() => setIsOpen(false)} 
      className="text-lg font-medium hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
          <Sparkles className="w-6 h-6" />
          <span>Elkiya</span>
        </Link>

        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="#home" className="flex items-center gap-2 text-xl font-bold font-headline text-primary" onClick={() => setIsOpen(false)}>
                      <Sparkles className="w-6 h-6" />
                      <span>Elkiya</span>
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                <nav className="flex-1 flex flex-col gap-6 p-6">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} {...link} />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
