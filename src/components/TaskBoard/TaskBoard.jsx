import { Fragment, useState } from "react";
import NoTaskFound from "../NoTaskFound";
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

    const [taskToUpdate, setTaskToUpdate] = useState(null)

    // add new task
    function handleAddTask(newTask, isAdd) {
        console.log(newTask)
        if (isAdd) {
            setTasks([
                ...tasks,
                newTask
            ])
        } else {
            setTasks(tasks.map((task) => {
                if (task.id === newTask.id) {
                    return newTask
                }
                return task
            }))
        }
        setShowModal(false)
    }

    // edit task
    function handleEditTask(task) {
        // console.log(task)
        setTaskToUpdate(task)
        setShowModal(true)
    }

    // cancel
    function handleCancel() {
        setShowModal(false)
        setTaskToUpdate(null)
    }

    // delete a task
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

    // search
    function handleSearch(searchTerm) {
        const search = tasks.filter((task) => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setTasks([...search])
    }

    // favourite task
    function handleFavouriteTask(taskId) {
        // console.log(taskId)
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        // console.log(taskIndex)
        const newTasks = [...tasks]

        newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite

        setTasks(newTasks)
    }




    return (
        <Fragment>

            {showModal && <TaskModal
                taskToUpdate={taskToUpdate}
                onSaveTask={handleAddTask}
                onCancel={handleCancel} />}

            <section className="mb-20" id="tasks">

                <div className="container">
                    {/* Search Box */}
                    <Searchbox onSearchTerm={handleSearch} />

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <div className="mb-14 items-center justify-between sm:flex">
                            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                            {/* Task actions */}
                            <TaskActions onAddTask={() => setShowModal(true)} onDeleteAllTask={handleDeleteAllTask} />
                        </div>
                        <div className="overflow-auto">

                            {/* Task list */}
                            {tasks.length > 0
                                ?
                                <TaskList
                                    onFavourite={handleFavouriteTask}
                                    onEditTask={handleEditTask}
                                    tasks={tasks}
                                    onDeleteTask={handleDeleteTask} />
                                :
                                <NoTaskFound />
                            }



                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}