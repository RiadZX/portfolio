import { BlogPosts } from 'app/components/posts'
import {GithubActivity} from 'app/components/github'
import { Suspense } from 'react'
import Comments from './components/comments'
import CertificatesExperiencesSection from './components/CertificatesExperiencesSection'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        my portfolio 👻
      </h1>
      <p className="mb-4">
        i'm riad zaid, a computer science and engineering student{' '}
        <a 
          href="https://www.tudelft.nl/en/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          @tudelft
        </a>
        .{' '}i'm passionate about building software that has an impact. i'm eager to learn all there
        is about software engineering and i'm always looking for new challenges.
      </p>
      <CertificatesExperiencesSection />
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter text-center">Blog Posts</h2>
      <div className="my-8">
        <BlogPosts />
      </div>
      <div className='my-8 pt-8'>
        <Suspense fallback={<div>Loading Github Activity</div>}>
          <GithubActivity/>
        </Suspense>
      </div>
      <div className="mb-6 flex justify-center">
        <a
          href="https://9drg4tfnx0.ufs.sh/f/QBZwS7j5aSHoBXl3R0EmtvC0NcgduaiDfVWrQLy6P3bqzpn7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>
      </div>
      <div>
        <h2 className="pt-8 mb-8 text-2xl font-semibold tracking-tighter text-center">Say hi 🙂👋</h2>
      <Comments/>
      </div>
      
    </section>
  )
}
