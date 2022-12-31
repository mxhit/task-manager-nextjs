import { FormEvent, useState } from "react";
import { NextRouter, useRouter } from "next/router";

interface FormData {
    id: string|number
    name: string
}

export let RefreshData: any;

export default function TaskForm() {
    const [form, setForm]=useState<FormData>({ name: '', id: '' });
    const router=useRouter();

    RefreshData=() => {
        router.replace(router.asPath);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>, data: FormData) {
        e.preventDefault();

        try {
            save(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function save(data: FormData) {
        try {
            fetch('http://localhost:3000/api/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(() => {
                    setForm({ name: '', id: '' });
                    RefreshData();
                });
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <div className="my-10">
            <form onSubmit={(e) => handleSubmit(e, form)}
                className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch">
                <input type="text"
                    className="rounded border-2 border-gray-600 p-1"
                    placeholder="Enter Task"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <button type="submit" className="rounded bg-blue-600 text-white p-1">Save</button>
            </form>
        </div>
    );
}