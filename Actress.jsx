import './Actress.css';

function Actress(props) {
  return (
    <div className="actress-card">
      <img className="actress-img" src={props.img} alt='Actress' />
      <h2><b>Name: </b>{props.name}</h2>
      <h3><b>Notable Works: </b>{props.works}</h3>
      <p><b>Genres: </b>{props.genres}</p>
      <p><b>Description: </b>{props.description}</p>
    </div>
  );
}

export default Actress;
