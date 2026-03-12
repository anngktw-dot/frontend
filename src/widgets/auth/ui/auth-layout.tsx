import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0616] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,32,125,0.22)_0%,_rgba(16,9,37,0.14)_34%,_rgba(7,3,18,1)_78%)]" />

      <div className="absolute left-[18%] top-[18%] h-[260px] w-[260px] rounded-full border border-violet-300/5" />
      <div className="absolute left-[16%] top-[16%] h-[320px] w-[320px] rounded-full border border-violet-300/5" />
      <div className="absolute left-[14%] top-[14%] h-[380px] w-[380px] rounded-full border border-violet-300/5" />
      <div className="absolute left-[12%] top-[12%] h-[440px] w-[440px] rounded-full border border-violet-300/5" />

      <div className="absolute right-[18%] bottom-[12%] h-[140px] w-[140px] rounded-full border border-violet-300/5" />
      <div className="absolute right-[16%] bottom-[10%] h-[190px] w-[190px] rounded-full border border-violet-300/5" />
      <div className="absolute right-[14%] bottom-[8%] h-[240px] w-[240px] rounded-full border border-violet-300/5" />

      <div className="absolute right-[23%] top-[32%] h-[52px] w-[52px] rounded-full border-4 border-dashed border-white/10" />

      <div className="relative flex min-h-screen items-center justify-center px-4">{children}</div>
    </main>
  )
}
