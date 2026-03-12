import Image from 'next/image'
import Link from 'next/link'

export function RegisterForm() {
  return (
    <div className="flex w-[624px] flex-col items-center">
      <div className="mb-[34px] flex justify-center">
        <Image
          src="/logo.png"
          alt="Sympany"
          width={343}
          height={73}
          priority
          className="h-[73px] w-[343px]"
        />
      </div>

      <div className="w-[540px] rounded-[24px] bg-[#222334] px-[34px] py-[38px] shadow-[0_0_28px_rgba(110,69,255,0.12)]">
        <h1 className="mb-[28px] text-center text-[31px] font-medium leading-[1.05] text-white">
          Register a new
          <br />
          account
        </h1>

        <div className="flex flex-col gap-[16px]">
          <input
            type="text"
            placeholder="Email"
            className="h-[56px] w-full rounded-[18px] border border-[#A55BEA] bg-[#222334] px-[16px] text-[18px] text-white placeholder:text-white/70 outline-none"
          />

          <input
            type="text"
            placeholder="Username"
            className="h-[56px] w-full rounded-[18px] border border-[#A55BEA] bg-[#222334] px-[16px] text-[18px] text-white placeholder:text-white/70 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="h-[56px] w-full rounded-[18px] border border-[#A55BEA] bg-[#222334] px-[16px] text-[18px] text-white placeholder:text-white/70 outline-none"
          />

          <div className="mt-[-4px] text-[12px] text-white/80">
            By registering you agree to the Privacy Policy
          </div>

          <button
            type="submit"
            className="mt-[4px] h-[56px] w-full rounded-[18px] bg-[#B56BE7] text-[18px] font-medium text-white shadow-[0_0_18px_rgba(181,107,231,0.45)]"
          >
            Register
          </button>

          <div className="flex justify-center">
            <Image
              src="/spotify-button.png"
              alt="Spotify"
              width={522}
              height={56}
              className="h-[56px] w-[522px]"
            />
          </div>

          <p className="mt-[8px] text-center text-[12px] text-white/85">
            Already have an account?{' '}
            <Link href="/login" className="text-[#B56BE7]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
