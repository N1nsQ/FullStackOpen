const SearcrhBox = ({ value, onChange }) => {
  return (
    <>
      <div>
        Haku: <input value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default SearcrhBox;
