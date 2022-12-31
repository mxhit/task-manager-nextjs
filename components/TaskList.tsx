import { Tasks } from "../pages";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }: Tasks) {
    return (
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
            <ul>
                {tasks.map((task) => <TaskItem key={task.id} id={task.id} name={task.name} />)}
            </ul>
        </div>
    );
}