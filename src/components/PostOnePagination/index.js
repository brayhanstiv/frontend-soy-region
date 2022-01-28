import React from 'react';
import {Link} from "react-router-dom";

const PostOnePagination = ({className}) => {
    return (
        <div className="next_prev">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>NOTICIAS ANTERIORES</p>
                        <h3><Link to="/">Kushner se pone en medio de la casa blanca
                        caótica respuesta al coronavirus.</Link></h3>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>PRÓXIMAS NOTICIAS</p>
                        <h3><Link to="/">La C.I.A. busca totales de virus auténticos en                          
                        China, desestimando los recuentos del gobierno</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostOnePagination;