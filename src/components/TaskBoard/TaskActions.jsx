import { Fragment } from "react";

export default function TaskActions({ onAddTask, onDeleteAllTask }) {
    return (
        <Fragment>
            <div className="flex items-center space-x-5">
                <button
                    onClick={onAddTask} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
                <button
                    onClick={onDeleteAllTask} className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
            </div>
        </Fragment>
    )
}