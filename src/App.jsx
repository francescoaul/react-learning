import HelloWorld from "./exercises/HelloWorld"
import Counter from "./exercises/Counter"
import InventoryTracker from "./exercises/InventoryTracker"
import WaterTracker from "./exercises/WaterTracker"
import SleepTracker from "./exercises/SleepTracker"
import PushCounter from "./exercises/PushCounter"
import CoffeeTracker from "./exercises/CoffeeTracker"
import StudySessionCounter from "./exercises/StudySessionCounter"
import HabitStreak from "./exercises/HabitSteak"
import ToDoList from "./exercises/ToDoList"
import FavoriteMovies from "./exercises/FavoriteMovies"
import MeditationSessionTracker from "./exercises/MeditationSessionTracker"
import StepTracker from "./exercises/StepTracker"
import SquatCounter from "./exercises/SquatCounter"
import JumpingJacksTracker from "./exercises/JumpingJacksTracker"
import CodeCompileCounter from "./exercises/CodeCompileCounter"
import PagesRead from "./exercises/PagesRead"
import CardDemo from "./exercises/CardDemo"
import Card from "./components/Card"
import MUICounter from "./exercises/MUICounter"
import BasicTextFields from "./exercises/InputField"


export default function App() {
  return (
    <div style={{display: "grid", gap: "2rem", placeItems: "center"}}>
      <HelloWorld />
      <Counter />
      <InventoryTracker />
      <WaterTracker />
      <SleepTracker />
      <PushCounter />
      <CoffeeTracker />
      <StudySessionCounter />
      <HabitStreak />
      <ToDoList />
      <FavoriteMovies />
      <MeditationSessionTracker />
      <StepTracker />
      <SquatCounter />
      <JumpingJacksTracker />
      <CodeCompileCounter />
      <PagesRead />
      <CardDemo />
      <MUICounter />
      <BasicTextFields />
    </div>
  )
}

