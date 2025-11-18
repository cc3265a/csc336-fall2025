import { useState, useEffect } from 'react'

function Space() {

  const [spaceData, setSpaceData] = useState(null);
  const [spaceIMG, setSpaceIMG] = useState(null);
  const [spaceText, setSpaceText] = useState("");
  const [timesClicked, setTimesClicked] = useState("");

  const fetchSpace = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=GRFLekMTGEziF3h3g8ajzV4Y7UQ4MXvbB5XLf9I8&count=1&thumbs=True`)
      .then(res => {
        // Check if the response is ok (status 200-299).
        // APIs typically use HTTP status codes to indicate if a request was successful or if there was an error.
        // Codes in the 200 range mean success, while codes like 404 mean not found, or 500 mean server error.
        // We only want to continue if the response was successful.
        if (!res.ok) {
          // If the response is not ok, throw an error.
          // This will trigger the .catch() block below.
          throw new Error('Space not found');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setSpaceData({
          data
        });
        setSpaceIMG(data[0].hdurl);
        setSpaceText(data[0].explanation);
      })
      .catch(err => {
        setSpaceData(null);
      });
    };

    useEffect(() => {
      fetchSpace();
    }, [timesClicked]);

    function buttonClicked(){
      setTimesClicked(timesClicked + 1);
      console.log("button clicked");
    }

  return (
    <div id='bodyDiv'>
      <h1>Space!</h1>
      <p>Behold a random "picture a day" and the accompanying explanaition from NASA!</p>
      <button onClick={e=>buttonClicked()}>Click Here For Image</button>
      <p></p>
      <img src= {spaceIMG}></img>
      <p>{spaceText}</p>
    </div>
  );


}
export default Space;