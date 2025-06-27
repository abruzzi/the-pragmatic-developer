import './styles.css';

export const BigList = () => {
  const rows = Array.from({ length: 20000 }, (_, i) => i);

  return (
    <div className='row-container'>
      {rows.map((index) => (
        <div
          key={index}
          className={`${index % 2 ? "odd" : "even"} row`}
        >
          Row {index}
        </div>
      ))}
    </div>
  );
};
