import { useState } from "react"
import sehee_full from "./assets/sehee_full.png"

import Header from "./components/Header"
import CourseGoalList from "./components/CourseGoalList"
import NewGoal from "./components/NewGoal"

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src: sehee_full, alt: 'a list of goals'}}>
        <h1>Your Course goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
