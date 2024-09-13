// import Link from "./Link";

export default function Card({ imageUrl, title, link, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{children}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Read more
        </a>
      </div>
    </div>
  );
}

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
