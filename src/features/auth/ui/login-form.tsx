import Link from 'next/link'

export function LoginForm() {
  return (
    <div className="w-full max-w-[360px] rounded-[20px] bg-[#232334]/95 px-[24px] py-[22px] shadow-[0_0_28px_rgba(110,69,255,0.12)]">
      <div className="mb-4 flex flex-col items-center">
        <div className="mb-2 text-[14px] font-semibold text-white">Sympany</div>

        <h1 className="text-center text-[22px] font-semibold text-white">Login to account</h1>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="h-[38px] w-full rounded-[10px] border border-[#b45ff0] bg-transparent px-3 text-[12px] text-white placeholder:text-white/50 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="h-[38px] w-full rounded-[10px] border border-[#b45ff0] bg-transparent px-3 text-[12px] text-white placeholder:text-white/50 outline-none"
        />

        <div className="text-[9px] text-white/45">Forgot your password?</div>

        <button
          type="submit"
          className="h-[42px] w-full rounded-[12px] bg-[#b567ec] text-[13px] font-medium text-white shadow-[0_0_12px_rgba(181,103,236,0.45)]"
        >
          Log In
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-white/15" />
          <span className="text-[8px] text-white/40">or</span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <button
          type="button"
          className="flex h-[38px] w-full items-center justify-center gap-2 rounded-[10px] border border-[#b45ff0] bg-transparent text-[12px] text-white"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
          Spotify
        </button>

        <p className="mt-1 text-center text-[8px] text-white/45">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#b567ec]">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
