import { Rating } from '@mui/material';
import '../styles/HeroCard.css';

function HeroCard(props) {
    return (
        <div className="HeroCard">
            <h2>{props.name}</h2>
            <div className='superhero-biography'><p>Вселенная:</p><p>{props.universe}</p></div>
            <div className='superhero-biography'><p>Альтер Эго:</p><p>{props.alterego}</p></div> 
            <div className='superhero-biography'><p>Род деятельности:</p><p>{props.occupation}</p></div>
            <div className='superhero-biography'><p>Друзья:</p><p>{props.friends}</p></div>
            <div className='superhero-biography'><p>Суперсилы:</p><p>{props.superpowers}</p></div>
            <img src={props.url} alt="superhero"></img>
            <div className='superhero-biography'><p>Дополнительная информация:</p></div>
            <div className='superhero-biography'>{props.info}</div>
            <Rating></Rating>
        </div>
    );
}

export default HeroCard;