export const Colours = ({data}) => {
    const listItems = data.map(element => 
      <li>
        {element}
      </li>
    )
  return (
    <>
      <ul>
      {listItems}
      </ul>
    </>
  );
};


//  <ul>
//       {data.map((element) => (
//         <li>{element}</li>
//     ))}
//       </ul>