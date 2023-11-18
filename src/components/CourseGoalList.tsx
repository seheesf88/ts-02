import { type ReactNode } from 'react'

import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox";

type CourseGoalsListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no course goals yet. Strart add some!</InfoBox>
    )
  }

  let warningbox: ReactNode;

  if (goals.length >= 4) {
    warningbox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    )
  }

  return (
    <>
      { warningbox }
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
    </>
  )
}