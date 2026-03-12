import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120D25] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(63,36,132,0.25)_0%,_rgba(19,12,42,0.18)_35%,_rgba(8,5,18,1)_78%)]" />

      <div className="absolute left-[-8px] top-[170px] h-[24px] w-[24px] rounded-full bg-white/8" />

      <div className="absolute left-[170px] top-[120px] h-[520px] w-[520px] rounded-full border border-white/[0.03]" />
      <div className="absolute left-[205px] top-[155px] h-[450px] w-[450px] rounded-full border border-white/[0.03]" />
      <div className="absolute left-[240px] top-[190px] h-[380px] w-[380px] rounded-full border border-white/[0.03]" />
      <div className="absolute left-[275px] top-[225px] h-[310px] w-[310px] rounded-full border border-white/[0.03]" />

      <div className="absolute right-[120px] bottom-[-40px] h-[290px] w-[290px] rounded-full border border-white/[0.03]" />
      <div className="absolute right-[155px] bottom-[-5px] h-[220px] w-[220px] rounded-full border border-white/[0.03]" />
      <div className="absolute right-[190px] bottom-[30px] h-[150px] w-[150px] rounded-full border border-white/[0.03]" />

      <div className="absolute right-[210px] top-[235px] h-[68px] w-[68px] rounded-full border-[6px] border-dashed border-white/10" />

      <div className="relative flex min-h-screen items-center justify-center px-4">{children}</div>
    </main>
  )
}
