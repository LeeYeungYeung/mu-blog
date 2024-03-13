import TextBox from "./text"
export default function Footer() {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <TextBox title={'About Me'} content={'Learn about Next.js in an interactive course with&nbsp;quizzes!'}/>
        <TextBox title={'Github'} content={'Build the next&nbsp;generation of web apps with&nbsp;React.'}/>
      </div>
    )
}