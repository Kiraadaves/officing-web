"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
<<<<<<< HEAD
<<<<<<< HEAD
import { Check } from "lucide-react"
=======
import { CheckIcon } from "@radix-ui/react-icons"
>>>>>>> 17cfc3e (Assest page done)
=======
import { Check } from "lucide-react"
>>>>>>> 5d75f2f (search filter implemented)

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
=======
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
>>>>>>> 17cfc3e (Assest page done)
=======
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
>>>>>>> 5d75f2f (search filter implemented)
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
<<<<<<< HEAD
<<<<<<< HEAD
      <Check className="h-4 w-4" />
=======
      <CheckIcon className="h-4 w-4" />
>>>>>>> 17cfc3e (Assest page done)
=======
      <Check className="h-4 w-4" />
>>>>>>> 5d75f2f (search filter implemented)
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
