import React from 'react';
import {Link} from "react-router-dom";

import union from '../../assets/img/icon/union.png';
import category1 from '../../assets/img/categories/category1.jpg';
import category2 from '../../assets/img/categories/category2.jpg';
import category3 from '../../assets/img/categories/category3.jpg';
import category4 from '../../assets/img/categories/category4.jpg';
import category5 from '../../assets/img/categories/category5.jpg';
import category6 from '../../assets/img/categories/category6.jpg';

const categories = [
    {
        small_img: union,
        big_image: category1,
        title: 'Restaurantes',
    },
    {
        small_img: union,
        big_image: category2,
        title: 'Entretenimiento',
    },
    {
        small_img: union,
        big_image: category3,
        title: 'Tecnología',
    },
    {
        small_img: union,
        big_image: category4,
        title: 'Negocios',
    },
    {
        small_img: union,
        big_image: category5,
        title: 'Tendencias',
    },
    {
        small_img: union,
        big_image: category6,
        title: 'Deportes',
    },
];

const CategoriesWidget = () => {
    return (
        <div className="widget category mb30">
            <div className="row">
                <div className="col-6 align-self-center">
                    <h2 className="widget-title">Categorias</h2>
                </div>
                <div className="col-6 text-right align-self-center">
                    <Link to="/" className="see_all mb20">Ver Todo</Link>
                </div>
            </div>
            <ul>
                {categories.map((item, i) => (
                    <li key={i}>
                        <Link to="/" style={{background: `url(${item.big_image})`}}> <span>{item.title}</span>
                            <img src={item.small_img} alt="category"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesWidget;