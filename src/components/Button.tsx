import { ComponentProps } from "react"
import { CheckCircle } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "flex justify-center items-center rounded bg-zinc-50 text-sm font-medium text-zinc-900 hover:bg-zinc-200 data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-600",
  variants: {
    size: {
      default: 'px-4 h-10',
      sm: 'px-3 h-8',
      xs: 'px-2 h-6 text-xs'
    },
    success: {
      true: "bg-emerald-500 hover:bg-emerald-600"
    },
  },
  defaultVariants: {
    size: 'default',
    success: false
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ success, size, className, ...props }: ButtonProps) {
  return (
    <button data-success={success} className={button({ size, success, className })} {...props}>
      {success ? <CheckCircle className="h-4 w-4" /> : props.children}
    </button>
  )
}
