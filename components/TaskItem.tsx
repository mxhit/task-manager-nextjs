import { RefreshData } from "./TaskForm";

export default function TaskItem({ id, name }: any) {
    async function deleteTask(id: string|number) {
        fetch("http://localhost:3000/api/delete", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id),
        })
            .then(() => RefreshData());
    }

    return (
        <>
            <li className="border-l-2 border-gray-600 p-2 mb-2">
                <div className="flex justify-between">
                    <div className="flex-1">
                        <h3 className="font-medium">{name}</h3>
                    </div>
                    <button className="bg-red-600 text-white py-1 px-2 rounded font-light" onClick={() => deleteTask(id)}>x</button>
                </div>
            </li>
        </>
    );
}