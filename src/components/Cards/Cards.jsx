import { useNavigate } from 'react-router-dom';
import './Card.css';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../Store/ReduxStore';

 function Cards({title,image,price,categery,rating,count,id}) {
    console.log(title+' '+image+' '+price);
      const dispatch = useDispatch();
     // const navigate = useNavigate();
    const handlclick = () => {
        
       // navigate(`/dis/${id}`);

    }
    const onClickHandler = () => {
       
      dispatch(addTocart({ id, image,price,categery,rating,count,title }));
       alert(title+"added in cart successfully");

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
        <button onClick={onClickHandler}>add to cart</button>
       </div>
</div>
    
  )
}
export default Cards;