export interface Props {
  title: string
  color?: string
}

const Header = (props: Props) => {
  return (
    <header>
      <h2 style={{color: props.color ? props.color : 'blue'}}>{props.title}</h2>
    </header>
  )
}

export default Header;