import { type ReactNode } from 'react'

// #1
interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}


export default function Header({ image, children} : HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      { children }
    </header>
  )
}