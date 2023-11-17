import CourseGoal from "./CourseGoal"

type CourseGoalsListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalsListProps) {
  return (
    <ul>
      {
        goals.map(goal => {
          return <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                {goal.description}
              </CourseGoal>
          </li>
        })
      }
    </ul>
  )
}