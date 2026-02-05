import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total exercises={props.course.parts} />
    </>
  );
};

export default Course;
