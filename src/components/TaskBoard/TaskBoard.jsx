import { Fragment } from "react";
import Searchbox from "./Searchbox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
    return (
        <Fragment>
            <section className="mb-20" id="tasks">

                <div className="container">
                    {/* <!-- Search Box --> */}
                    <Searchbox />
                    {/* <!-- Search Box Ends --> */}
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <div className="mb-14 items-center justify-between sm:flex">
                            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                            <TaskActions />
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
                                    
                                    <TaskList />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}