import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"



const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none  data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default:
          "bg-cws-blue text-white hover:bg-cws-blue-dark duration-300",
        none:
          "font-bold",
        transparent:
          "bg-gray-100 hover:bg-gray-200 duration-300",
        defaultOutline:
          "border-cws-blue text-cws-blue duration-300",
        defaultOutlineNone:
          "bg-white border border-cws-blue text-cws-blue bg-white ",
        pricingNeutral: "bg-white text-cws-blue bg-white hover:bg-slate-200 ",
        pricingHighlight: "bg-white text-cws-blue bg-white hover:bg-[#2966cc] hover:text-white ",
        defaultOutline48:
          "bg-white border w-72 border-cws-blue text-cws-blue ",
        neutral:
          "bg-neutral-900 text-white h-16 hover:bg-cws-blue-dark dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 focus:outline-none",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        getStarted:
          "bg-cws-green text-white felx hover:bg-cws-green-dark dark:bg-slate-50 dark:text-slate-900",
      },
      size: {
        default: "h-10 py-2 px-4",
        xsm: "h-10 px-2 rounded-md",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-4 rounded-md",
        xlg: "h-14 px-4 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
