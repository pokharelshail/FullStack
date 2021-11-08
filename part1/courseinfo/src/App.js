import './App.css';

const Header = (props) => <h1>{props.course}</h1>

const Content =({parts})=>{
  const [part1,part2,part3] = parts
  return(<div>
    <Part name = {part1.name} exercises = {part1.exercises}/>
    <Part name = {part2.name} exercises = {part2.exercises}/>
    <Part name= {part3.name} exercises = {part3.exercises}/>
  </div>)
}
const Total  = ({parts})=>{
  const [part1,part2,part3] = parts
  return(<p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>)
}
const Part = (props) => <p>{props.name} {props.exercises}</p>




const App = ()=>{
  const course = {
  name: 'Half Stack App Development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10,
  },
  {
    name: 'Using props to pass data',
    exercises: 10,
  },
  {
    name: 'State of a component',
    exercises: 14,
  },],
}
  
  return(

    <div>
      <Header course={course.name}/>
      <Content parts ={course.parts} />
      <Total parts={course.parts}/>
    </div>

     
    
  )
}

export default App;