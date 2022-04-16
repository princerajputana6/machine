

const data = [
  {
    id: 1,
    name: "prince",
    subject: "javascript",
    friend: [
      { id: 1.1, name: "dummy1", subject: "physics"}
    ]
  },
  {
    id: 2,
    name: "himanshu",
    friend: [
      { id: 2.1, name: "piyush", subject: "physics", friend: [{ id: 1, name: "priyank", subject: "maths" }] }
    ]
  },
  {
    id: 3,
    name: "praveen",
    subject: "javascript",
    friend: [
      { id: 3.1, name: "datasetm", subject: "physics" }
    ]
  },

]


function App() {

  return (
    <div className="App container p-4">
      <h1 className="text-center">Nested Data from Api</h1>
      {data.map((item,id1)=>(
        <div className="container flex justify-content-start">
         <div className="container">{item.id} {item.name}
         <div className="container pl-4">
           {item.friend.map((item2,id2)=>(
             <div className="container pl-4">{item2.id} {item2.name}
              {/* {item2.friend.map((item3,id3)=>(
                <div className="container pl-4">{item3.id} {item3.name}</div>
              ))} */}
             </div>
           ))}
         </div>
         </div>
        </div>
      ))}
    </div>
  );
}

export default App;
