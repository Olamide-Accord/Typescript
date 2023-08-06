import React, { ReactElement, ReactNode } from 'react';
import './App.css'

// Ract FC is not really encouraged
// const HeadingFC: React.FC<{ title: string; }> = ({title}) => <h1>{title}</h1>

// conventional props
function Heading({ title }: { title: string; }) {
  return (
    <h1>{title}</h1>
  )
} 

function HeadingWithContent({ children}: { children: ReactNode }): ReactElement | null {
  return (
    <p>
      {children}
    </p>
  )
} 

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps
function Container({ heading, children}: ContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      <p>
        {children}
      </p>
    </div>
  )
} 
Container.defaultProps = defaultContainerProps;

// Functional Props
function TextWithNumber({
  header,
  children
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}
) {
  const [state, setState] = React.useState<number>(1)
  return(
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  )
}


{/* lIST */}
function List<ListItem>({
  items,
  render
}: {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}


// class component
class MyHeader extends React.Component<{
  header: ReactNode,
}>{
  
}

function App() {
  return (
    <div className='App'>
      <Heading title='Hello there' />
      <HeadingWithContent>
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam officiis adipisci voluptatum magni, cumque necessitatibus numquam corporis culpa repellendus vero possimus quasi quaerat. Suscipit rerum aperiam doloribus perspiciatis voluptas?
        </i>
      </HeadingWithContent>
      <Container>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </Container>
      <TextWithNumber header={(num: number) => <span>Header ({num})</span>}>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List items={['Jack', 'Sadie', "Vera"]} render={(item: string) => <div>{item.toLowerCase()}</div>}>

      </List>
    </div>
  )
}

export default App
