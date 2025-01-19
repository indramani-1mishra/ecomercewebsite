import { useNavigate } from 'react-router-dom';
import './Card.css';
export default function Cards({title,image,price,categery,rating,count,id}) {
    console.log(title+' '+image+' '+price);

      const navigate = useNavigate();
    const handlclick = () => {
        
        navigate(`/dis/${id}`);

    }

  return (
   
      <div className='raj' onClick={handlclick}>
       <div className="imagec">
       <img src={image} alt={title} className="image"/>
       </div>
       <div className="detalis">
        <h3>{title}</h3>
        <p> categery:{categery}</p>
        <p>Price: {price}</p>
        <span>Rating: {rating}</span>
        <span>Count: {count}</span>
       </div>
</div>
    
  )
}
