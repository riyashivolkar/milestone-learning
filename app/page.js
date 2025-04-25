import {
  AcademicPerformance,
  Hero,
  Support,
  Success,
  Milestone,
  Insights,
  Faq,
  BecomeTutor,
  Trust,
} from "./components/index.js";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Support />
      <Success />
      <AcademicPerformance />
      <Milestone />
      <Trust />
      <Insights />
      <Faq />
      <BecomeTutor />
    </div>
  );
}
