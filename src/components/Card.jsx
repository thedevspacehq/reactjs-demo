// import Link from "./Link";

function Card() {
  function capitalize(title) {
    return title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const imageUrl = "./image.png";
  const title = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
  const link = "/link-to-article";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{capitalize(title)}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Read more
        </a>
      </div>
    </div>
  );
}

export default Card;

// export default Card;

// function Card(props) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img
//         src={props.imageUrl}
//         alt={props.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
//         <p className="text-gray-700 mb-4">{props.description}</p>
//         <a href={props.link} className="text-blue-500 hover:text-blue-700">
//           Read more
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Card;
