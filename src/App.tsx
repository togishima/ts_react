import TaskInput from "components/TaskInput"
import TaskList from "components/TaskList"
import { Task } from "types/task"
import { useState } from "react"

const initialState: Task[] = [
        {
            id:2,
            title: '次にやるやつ',
            done: false
        },
        {
            id: 1,
            title: '初めにやるやつ',
            done: false
        }
    ]

const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)

    return (
        <div>
            <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
    )
}

export default App