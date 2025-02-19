import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "../Components/NotFound";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1 className="text-white">Here is a definition:</h1>
          {word.map((meaning, index) => {
            return (
              <p className="text-white" key={index}>
                {meaning.partOfSpeech}: {meaning.definitions[0].definition}
              </p>
            );
          })}
        </>
      ) : null}
    </>
  );
}
