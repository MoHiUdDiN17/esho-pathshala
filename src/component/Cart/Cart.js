import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';
const Cart = (props) => {
    const { id, name, logo, total } = props.eachcart;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div>
            <div className='col'>
                <div className='card'>
                    <img src={logo} className='card-img-top' alt="" />
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <Link to={`/quiz/${id}`}>
                            <button onClick={handleNavigate} type="button" className="btn btn-info cent">Start Practice</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;