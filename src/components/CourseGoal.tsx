// import { type ReactNode } from 'react'
import { type PropsWithChildren } from 'react'

// #1
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }

// #2
type CourseGoalProps = PropsWithChildren<{
  id: number; 
  title: string;
  onDelete: (id: number) => void;
}>

export default function CourseGoal({id, title, onDelete, children}: CourseGoalProps ) {
  return <article>
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
    <button onClick={() => onDelete(id)}>DELETE</button>
  </article>
}

// #3
// import { type FC, type PropsWithChildren } from 'react'

// type CourseGoalProps = PropsWithChildren<{ title: string }>

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//   return <article>
//     <div>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </div>
//     <button>DELETE</button>
//   </article>
// }

// export default CourseGoal