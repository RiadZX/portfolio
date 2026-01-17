import { BlogPosts } from "app/components/posts"

const education = [
  {
    school: "TU Delft",
    program: "Computer Science and Engineering (BSc)",
    period: "2023–present",
    description: "Computer science and engineering with a focus on data science.",
  },
  {
    school: "VU Amsterdam",
    program: "Applied Econometrics (Minor)",
    period: "September 2025–January 2026",
    description: "Applied econometrics minor.",
  },
]

const experiences = [
  {
    role: "Teaching Assistant for Data Mining",
    company: "Technical University of Delft",
    period: "November 2025–present",
    description:
      "Taught data mining topics, supported assignments, and assisted with grading assignments.",
  },
  {
    role: "Freelance Rust Solana Developer",
    company: "Freelance",
    period: "July 2025–December 2025",
    description:
      "Built a copytrading bot with risk management and strategy systems.",
  },
  {
    role: "Founder",
    company: "Zed Trading",
    period: "July 2024–December 2025",
    description:
      "Built automated trading software on Solana, it is one of the fastest bots on the market. Gained deep experience and knowledge on the workings of the Solana blockchain and it's ecosystem. Also learned how to deal with customers :D",
  },
  {
    role: "Software Engineer Intern",
    company: "Superconnectors",
    period: "April 2025–June 2025",
    description: "Improved UI/UX and introduced research-backed gamification.",
  },
]

export default function Page() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-medium tracking-tight">Riad Zaid</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          
        </p>
      </header>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium tracking-tight">Education</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            {education.map((item) => (
              <li
                key={`${item.school}-${item.program}`}
                className="space-y-1"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span>
                    {item.school} — {item.program}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </span>
                </div>
                {item.description ? (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-medium tracking-tight">Notable Experiences</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            {experiences.map((item) => (
              <li
                key={`${item.company}-${item.role}-${item.period}`}
                className="space-y-1"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span>
                    {item.role}, {item.company}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </span>
                </div>
                {item.description ? (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">Writing & Notes</h2>
        <BlogPosts />
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-medium tracking-tight">Contact</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Reach me on{" "}
          <a
            href="https://www.linkedin.com/in/riadzaid/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-600"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/riadzx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-600"
          >
            GitHub
          </a>{" "}
          ,{" "}
          or send me an email at <a
            href="mailto:riadzaid@gmail.com"
            target="_blank"
            rel="noopener noreferrer" className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-600">riadzaid@gmail.com</a>.
        </p>
      </section>
    </section>
  )
}
