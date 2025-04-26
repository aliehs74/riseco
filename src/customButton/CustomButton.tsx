import React from 'react';
import { customButtonProps } from "./types/customButton"

const CustomButton: React.FC<customButtonProps> = ({ variant = 'primary', ...props }) => {
  return (
    <button  {...props} data-testid={props.label} className={`btn btn-${variant} btn-${props.size} ${props.className}`}>{props.label}</button>
  )
}

export default CustomButton