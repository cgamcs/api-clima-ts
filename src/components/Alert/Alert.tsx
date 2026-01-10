import style from './Alert.module.css'

function Alert({children}: {children: React.ReactNode}) {
  return (
    <div className={style.alert}>{children}</div>
  )
}

export default Alert