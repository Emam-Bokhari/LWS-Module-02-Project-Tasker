import { Fragment, useState } from "react";
import Searchbox from "./Searchbox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

export default function TaskBoard() {

    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: ["Web", "Python", "Api"],
        priority: "High",
        isFavourite: true
    }

    const [tasks, setTasks] = useState([defaultTask])

    const [showModal, setShowModal] = useState(false)

    function handleAddTask(newTask) {
        console.log(newTask)
        setTasks([
            ...tasks,
            newTask
        ])
        setShowModal(false)

    }

    // cancel
    function handleCancel() {
        setShowModal(false)
    }

    // delete task
    function handleDeleteTask(taskId) {
        const filteredTask = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTask)
    }

    // delete all task
    function handleDeleteAllTask() {
        tasks.length = 0
        setTasks([
            ...tasks
        ])
    }


    return (
        <Fragment>

            {showModal && <TaskModal onSaveTask={handleAddTask} onCancel={handleCancel} />}

            <section className="mb-20" id="tasks">

                <div className="container">
                    {/* Search Box */}
                    <Searchbox />

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <div className="mb-14 items-center justify-between sm:flex">
                            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                            {/* Task actions */}
                            <TaskActions onAddTask={() => setShowModal(true)} onDeleteAllTask={handleDeleteAllTask} />
                        </div>
                        <div className="overflow-auto">
                            <table className="table-fixed overflow-auto xl:w-full">
                                <thead>
                                    <tr>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Task list */}
                                    <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}