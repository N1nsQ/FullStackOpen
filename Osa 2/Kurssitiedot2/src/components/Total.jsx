const Total = ({ exercises }) => {
  const totalExcercises = exercises.reduce((sum, exercise) => {
    return sum + exercise.exercises;
  }, 0);

  return (
    <p>
      <strong>Total of {totalExcercises} excercises</strong>
    </p>
  );
};

export default Total;
