"use client"
import GithubCalendar from 'react-github-calendar';

export function GithubActivity() {
 return (
    <div className="relative -mx-[calc((100vw-100%)/2)] w-screen flex justify-center">
    <GithubCalendar
      username="riadzx"
      blockSize={15}
      blockMargin={5}
      fontSize={16}
    //   theme={
    //     {
    //         dark: ['#161b22', '#0e4429','#006d32','#26a641','#39d353'],
    //         light: ['hsl(0, 0%, 92%)','rebeccapurple'],
    //       }
    //   }
    />
  </div>
  );
}