import React from 'react';
import "./homeSection.scss";
import { useNavigate } from 'react-router-dom';

const HomeSection = (props) => {
    const { reverse, bg, img, title, content, button } = props;
    const navigate = useNavigate();
    return (
        <div className={`home-section py-5 d-flex align-items-center ${bg ? "bg-white" : ""}`}>
            <div className="page-container">
                <div className={`row full-witdh mx-auto section-row ${reverse ? "flex-md-row-reverse" : ""}`}>
                    <div className="col-7 col-md-4 product-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-12 col-md-8 product-title text-center text-md-start p-0 px-md-5">
                        <h4>{title}</h4>
                        <span className='text-muted'>
                            {content}
                        </span>
                        <button className='home-button' onClick={() => navigate('/shop')}>{button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;