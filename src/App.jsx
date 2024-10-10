// import { useState, useEffect } from "react";

// export default function App() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
//       setUser(data.results[0]);
//       setLoading(false);
//     }

//     fetchUser();
//   });

//   if (loading) return <div>Loading user...</div>;

//   return (
//     <div>
//       <h1>
//         {user.name.first} {user.name.last}
//       </h1>
//       <p>Email: {user.email}</p>
//       <img src={user.picture.large} alt="User profile" />
//     </div>
//   );
// }

// =============

// import { useState, useEffect } from "react";

// export default function App() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
//       setUser(data.results[0]);
//       setLoading(false);
//     }

//     fetchUser();
//   }, []);

//   if (loading) return <div>Loading user...</div>;

//   return (
//     <div>
//       <h1>
//         {user.name.first} {user.name.last}
//       </h1>
//       <p>Email: {user.email}</p>
//       <img src={user.picture.large} alt="User profile" />
//     </div>
//   );
// }

// ============

// import { useState, useEffect } from "react";

// export default function App() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
//       setUser(data.results[0]);
//       setLoading(false);
//     }

//     fetchUser();
//   }, [count]);

//   if (loading) return <div>Loading user...</div>;

//   return (
//     <div>
//       <h1>
//         {user.name.first} {user.name.last}
//       </h1>
//       <p>Email: {user.email}</p>
//       <img src={user.picture.large} alt="User profile" />

//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}>
//         Update Counter
//       </button>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// ================

// import { useState, useEffect } from "react";

// function User() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUser() {
//       const response = await fetch("https://randomuser.me/api/");
//       const data = await response.json();
//       setUser(data.results[0]);
//       setLoading(false);
//     }

//     fetchUser();

//     return () => {
//       console.log("User component is unmounted.");
//     };
//   }, []);

//   if (loading) return <div>Loading user...</div>;

//   return (
//     <>
//       <h1>
//         {user.name.first} {user.name.last}
//       </h1>
//       <p>Email: {user.email}</p>
//       <img src={user.picture.large} alt="User profile" />
//     </>
//   );
// }

// export default function App() {
//   const [mount, setMount] = useState(true);

//   return (
//     <div>
//       {mount ? <User /> : <p>User component is unmounted.</p>}
//       <button
//         onClick={() => {
//           setMount(!mount);
//         }}>
//         Toggle User
//       </button>
//     </div>
//   );
// }

import { useRef } from "react";

export default function App() {
  const count = useRef(0);

  return (
    <div>
      <p>{count.current}</p>
      <button
        onClick={() => {
          count.current = count.current + 1;
          console.log(count.current);
        }}>
        Add
      </button>
    </div>
  );
}
