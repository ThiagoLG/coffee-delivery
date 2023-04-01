import { IconProps } from 'phosphor-react'
import React from 'react'

export interface ITopic {
  title: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  backgroundColor: string
}
