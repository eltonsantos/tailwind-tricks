import { ComponentProps } from "react"
import { CheckCircle } from "lucide-react"

type ButtonProps = ComponentProps<'button'> & {
  success?: boolean
}

export function Button({ success = false, ...props }: ButtonProps) {
  return (
    <button
      data-success={success}
      className="rounded bg-zinc-50 px-4 h-10 text-sm font-medium text-zinc-900 hover:bg-zinc-200 data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-600"
      {...props}
    >
      {success ? <CheckCircle className="h-4 w-4" /> : props.children}
    </button>
  )
}
