import { Fragment } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard/TaskBoard";

export default function App() {
  return (
    <Fragment>

      <Navbar />
      <HeroSection />
      <TaskBoard />
      <Footer />

    </Fragment>
  )
}