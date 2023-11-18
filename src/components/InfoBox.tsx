import { type ReactNode } from 'react'
type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
}

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}
type InforBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox( props : InforBoxProps) {
  const { mode, children } = props

  if (mode === 'hint') {
    return (
      <aside className="infobox inforbox-hint">
        <p>{children}</p> 
      </aside>
    )
  }

  const { severity } = props
  return (
    <aside className={`infobox inforbox-warning waring--${severity}`}>
      <h2>Warning</h2> 
      <p>{children}</p> 
    </aside>
  )
}