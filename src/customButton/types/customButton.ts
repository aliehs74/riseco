export interface customButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}