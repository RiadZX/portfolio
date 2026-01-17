const footerLinks = [
  {
    text: "rss",
    link: "/rss",
  },
  {
    text: "github",
    link: "https://github.com/riadzx",
  },
  {
    text: "view source",
    link: "https://github.com/RiadZX/portfolio",
  },
  {
    text: "linkedin",
    link: "https://www.linkedin.com/in/riadzaid/",
  },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
      <nav className="flex flex-wrap gap-x-4 gap-y-2">
        {footerLinks.map((item) => (
          <a
            key={item.text}
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </nav>
      <p className="mt-4">Made by Riad Zaid and GPT-5.2 Codex | {new Date().getFullYear()}</p>
    </footer>
  )
}
