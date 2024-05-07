import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      Layout
      {children}
    </div>
  )
}