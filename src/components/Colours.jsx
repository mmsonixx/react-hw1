export const Colours = ({data}) => {
    console.log(data)
  return (
    <>
      <ul>
      {data.map((element) => (
        <li>{element}</li>
    ))}
      </ul>
    </>
  );
};
