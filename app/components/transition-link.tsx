'use client'

import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'

type TransitionLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string
  children: React.ReactNode
}

export function TransitionLink({ href, onClick, children, ...rest }: TransitionLinkProps) {
  const router = useRouter()

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    onClick?.(e)

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const doc = document as Document & {
        startViewTransition: (cb: () => Promise<void> | void) => { ready: Promise<void>; finished: Promise<void> }
      }
      doc.startViewTransition(() => {
        router.push(href)
        return new Promise<void>((resolve) => {
          setTimeout(resolve, 120)
        })
      })
    } else {
      router.push(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
