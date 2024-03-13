import { Fragment, useState } from "react";

export default function TaskModal({onSaveTask}) {

    const [task, setTask] = useState({
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavourite: false
    })

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value
        if (name === "tags") {
            value = value.split(",")
        }
        setTask({
            ...task,
            [name]: [value]
        })
    }

    return (
        <Fragment>
            <div className="bg-black bg-opacity-50 fixed inset-0 backdrop-blur-md z-50" ></div>

            <form
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            >
                <h2
                    className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
                >
                    Add New Task
                </h2>

                {/* <!-- inputs --> */}
                <div className="space-y-9 text-white lg:space-y-10">
                    {/* <!-- title --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            value={task.title}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            required
                        />
                    </div>
                    {/* <!-- description --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            value={task.description}
                            onChange={handleChange}
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            required
                        ></textarea>
                    </div>
                    {/* <!-- input group --> */}
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        {/* <!-- tags --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                value={task.tags}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                required
                            />
                        </div>
                        {/* <!-- priority --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                value={task.priority}
                                onChange={handleChange}
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <!-- inputs ends --> */}
                <div className="mt-16 flex justify-center lg:mt-20">
                    <button 
                    onClick={()=>onSaveTask(task)}
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Create new Task
                    </button>
                </div>
            </form>
        </Fragment>
    )
}