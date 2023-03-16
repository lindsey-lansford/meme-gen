// In the return method, I'm using the .map function to return a new array of `col`(bootstrap) and `img` elements that are specific to each search result

const GifDetail = (props) => {
  return (
    <div className="content">
      <h1>Giphy API Generator</h1>
      <div className="row content">
        {props.results.map((result) => (
          <div className="col-3" key={result.id}>
            <img
              alt={result.title}
              className="img-thumbnail"
              src={result.images.original.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifDetail;

// const GifDetail = (props) => {
//   return (
//     <ul className="list-group">
//       {props.results.map((result) => (
//         <li className="list-group-item" key={result.id}>
//           <img
//             alt={result.title}
//             className="img-fluid"
//             src={result.images.original.url}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
