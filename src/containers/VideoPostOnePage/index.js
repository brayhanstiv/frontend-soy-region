import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";
import ModalVideo from 'react-modal-video'

// images
import banner2 from "../../assets/img/bg/sidebar-1.png";
import big2 from '../../assets/img/blog/big2.jpg';
import author2 from '../../assets/img/author/author2.png';
import quote from '../../assets/img/icon/q.png';
import quote_1 from '../../assets/img/blog/quote_1.jpg';
import big1 from '../../assets/img/blog/big1.jpg';
import smail1 from '../../assets/img/blog/smail1.jpg';
import OurBlogSection from "../../components/OurBlogSection";
import BlogComment from "../../components/BlogComment";

const VideoPostOnePage = () => {
    const [vModal, setvModal] = useState(false);
    const [videoId, setVideoId] = useState('');

    const openModalVideo = (e, id) => {
        e.preventDefault();
        setVideoId(id);
        setvModal(true)
    };
    return (
        <Fragment>
            <div className="archives post post1">
                <BreadCrumb className="shadow5 padding-top-30" title="Archive / post 1"/>
                <span className="space-30"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <div className="page_category">
                                        <h4>SALUD</h4>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <div className="page_comments">
                                        <ul className="inline">
                                            <li><FontAwesome name="comment"/>563</li>
                                            <li><FontAwesome name="fire"/>563</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-30"/>
                            <div className="single_post_heading">
                                <h1>El éxito del virus en Japón ha desconcertado al mundo. ¿Se le está acabando la suerte?</h1>
                                <div className="space-10"/>
                                <p>La propiedad, que cuenta con una sala de proyección de 30 plazas,
                                    un anfiteatro de 100 plazas y un estanque de natación con...</p>
                            </div>
                            <div className="space-40"/>
                            <div className="video_img">
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} to="/" className="play_btn"><img
                                    src={big1} alt="big1"/></Link>
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} to="/"
                                      className="video_img_icon play_btn"> <FontAwesome name={"play"}/></Link>
                            </div>
                            <div className="space-20"/>
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="author">
                                        <div className="author_img">
                                            <div className="author_img_wrap">
                                                <img src={author2} alt="author2"/>
                                            </div>
                                        </div>
                                        <Link to="/">Shuvas Chandra</Link>
                                        <ul>
                                            <li><Link to="/">Marzo 26, 2020</Link></li>
                                            <li>Actualizado 1:58 p.m. ET</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="author_social inline text-right">
                                        <ul>
                                            <li><Link to="/"><FontAwesome name="instagram"/></Link></li>
                                            <li><Link to="/"><FontAwesome name="facebook-f"/></Link></li>
                                            <li><Link to="/"><FontAwesome name="youtube"/></Link></li>
                                            <li><Link to="/"><FontAwesome name="instagram"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-20"/>
                            <p>Se retirarán los entes de algunos hospitales de Nueva York y se redistribuirán a las zonas
                                más afectadas del estado, según una orden que firmará el gobernador Andrew Cuomo.
                                <br/>
                                <br/>En Nueva York se produjo el mayor aumento de muertes en un solo día, con 562 hasta 2.935,
                                casi la mitad de todas las muertes relacionadas con el virus que se registraron ayer en Estados
                                Unidos. La Casa Blanca podría aconsejar a los habitantes de los focos del virus que lleven la 
                                cara cubierta en público para ayudar a frenar la propagación.\<br/><br/>tados Unidos tiene ahora
                                245.658 casos de Covid-19.<br/><br/>La escasez de varios centenares de respiradores en la ciudad
                                de Nueva York, el epicentro del brote en EE.UU., hizo que el Sr. Cuomo dijera que iba a ordenar
                                que se retiraran las máquinas de varias partes del estado para entregarlas a las zonas más afectadas.
                                <br/><br/>En medio de una crisis cada vez más profunda, el <span className="bold"> Dr. Anthony Fauci,
                                </span>  alto funcionario de salud, ha dicho que cree que todos los estados deberían emitir órdenes de permanencia..
                                <br/>
                                <br/>“No entiendo por qué no se hace", dijo el Dr. Fauci
                                a la CNN el jueves. "Si miras lo que está pasando en
                                ste país, simplemente no entiendo por qué no estamos haciendo ingthat.”
                                <br/>
                                <br/>“Hay que pisar el acelerador para
                                bajar esa cifra", añadió, refiriéndose
                                a las tasas de infección y muerte.</p>
                            <div className="space-40"/>
                            <div className="points">
                                <ul>
                                <li>¿Deberíamos llevar más mascarillas?</li>
                                    <li>Por qué algunos países usan mascarillas y otros no</li>
                                    <li>Coronavirus: ¿Son seguras las mascarillas caseras?</li>
                                </ul>
                            </div>
                            <div className="space-40"/>
                            <p>Los comentarios del Dr. Fauci, que dirige el Instituto Nacional de Alergias
                                y Enfermedades Infecciosas, parecían contradecir los del presidente Trump,
                                que ha descartado sistemáticamente la idea de un cierre a nivel nacional.
                                <br/>
                                <br/>“Es terriblemente difícil decir: 'cierren'.
                                Tenemos que tener un poco de flexibilidad", dijo Trump el miércoles.</p>
                            <div className="space-40"/>
                            <h3>¿Cuál es el debate sobre las máscaras?</h3>
                            <div className="space-20"/>
                            <p>Tanto los Centros para el Control de Enfermedades (CDC) como la Organización
                            Mundial de la Salud (OMS) están reevaluando sus orientaciones sobre las mascarillas,
                            mientras los expertos se apresuran a encontrar formas de combatir contra el virus altamente contagioso.
                                <br/>
                                <br/>El Covid-19 se transmite en gotitas en el aire procedentes de personas que
                                tosen o estornudan, pero existe cierta controversia sobre la distancia que deben 
                                tomar las personas, y si las máscaras son útiles cuando las usa el público.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={smail1} alt="smail1"/>
                                </div>
                                <div className="col-md-6">
                                    <p>La OMS aconseja que las mascarillas ordinarias sólo son eficaces si se 
                                    combinan con con un lavado de manos cuidadoso y un distanciamiento social,
                                    y hasta ahora no las recomienda hasta ahora no las recomienda en general para las personas sanas.
                                        <br/>
                                        <br/>Sin embargo, cada vez son más los expertos en salud que afirman que
                                        existen beneficios. Sostienen que el uso público de mascarillas puede ayudar
                                        principalmente a prevenir a los pacientes asintomáticos - personas que han sido
                                        infectadas con Covid-19 pero no son conscientes de ello y no muestran ningún síntoma.
                                        que no sepan que están infectados por el virus.</p>
                                </div>
                            </div>
                            <div className="space-40"/>
                            <p>Las mascarillas también pueden ayudar a reducir el riesgo de contraer el virus
                                a través de las de estornudos o tos de otra persona, y se puede enseñar a la 
                                gente a ponerse y quitarse la mascarilla correctamente. a ponerse y quitarse 
                                las mascarillas correctamente, afirman.
                                <br/>
                                <br/>El jueves, el alcalde de Nueva York, Bill de Blasio, instó a todos los 
                                neoyorquinos a cubrirse la cara cuando estén al aire libre y cerca de otras 
                                personas, pero no a utilizar mascarillas quirúrgicas, que son escasos.
                                <br/>
                                <br/>“Puede ser una bufanda. Puede ser algo que crees tú mismo en casa. Puede
                                ser un pañuelo", dijo. El gobernador Cuomo se pronunció el viernes, diciendo 
                                "creo que es justo decir que las máscaras no pueden daño a menos que te den una 
                                falsa sensación de seguridad.”
                                <br/>
                                <br/>Mientras tanto, los residentes de Laredo (Texas) se enfrentarán a una multa
                                de 1.000 dólares (816 libras) si no se cubren la nariz y la boca de la ciudad 
                                emitieron una ordenanza de emergencia para sus de emergencia a sus aproximadamente
                                250.000 habitantes.
                            </p>
                            <div className="space-40"/>
                            <h3>¿Qué estados no están bloqueados?</h3>
                            <div className="space-20"/>
                            <p>Tanto los Centros para el Control de Enfermedades (CDC) de EE.UU. como la 
                            Organización Mundial de la Salud (OMS) están reevaluando sus orientaciones sobre 
                            las mascarillas, mientras los expertos se apresuran a encontrar formas de combatir
                            el virus altamente contagioso.
                                <br/>
                                <br/>El Covid-19 se transmite en las gotas de aire de las personas que tosen o 
                                estornudan, pero hay cierta controversia sobre la distancia que deben tomar las
                                personas entre sí, y sobre la utilidad de las mascarillas cuando las usa el público.</p>
                            <div className="space-40"/>
                            <img src={big1} alt="big1"/>
                            <p className="img_desc"><span>Acabo de tener un bebé - ahora voy a la primera línea.</span></p>
                            <div className="space-40"/>
                            <p>Las mascarillas también pueden ayudar a reducir el riesgo de que las personas contraigan el 
                            virus a través de las gotas de los estornudos o la tos de otra persona, y se puede enseñar a 
                            las personas a ponerse y quitarse las mascarillas correctamente, afirman.
                                <br/>
                                <br/>El jueves, el alcalde de Nueva York, Bill de Blasio, instó a todos los neoyorquinos 
                                a cubrirse la cara sus rostros cuando estén fuera y cerca de otros, pero que no usen máscaras 
                                quirúrgicas que son escasos.
                                <br/>
                                <br/>Mientras tanto, los residentes de Laredo (Texas) se enfrentarán a una multa de 1.000 dólares
                                (816 libras) si no se cubren la nariz y la boca mientras están de la ciudad emitieron una ordenanza 
                                de emergencia para sus de emergencia para sus aproximadamente 250.000 habitantes.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={quote_1} alt="quote"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="qhote">
                                        <img src={quote} alt="quote"/>
                                        <p>Debo explicarles cómo nació toda esta idea errónea que denuncia el 
                                        placer y alaba el dolor. placer y alabando el dolor nació y os daré una
                                        completa del sistema, y expondré las verdaderas enseñanzas del gran explorador
                                        de la verdad, el maestro constructor de la felicidad felicidad humana. .</p>
                                        <div className="author">
                                            <div className="author_img">
                                                <div className="author_img_wrap">
                                                    <img src={author2} alt="author2"/>
                                                </div>
                                            </div>
                                            <Link to="/">Shuvas Chandra</Link>
                                            <ul>
                                            <li>Fundador de Seative Digital</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-40"/>
                            <p>Al día siguiente volví con mi equipo y le dije: "Esto es lo que acabo de oír, 
                                tenemos que prepararnos, dijo. Sabíamos que no iba a pasar mucho tiempo antes
                                de que fuéramos que nos enfrentáramos a ello.
                                <br/>
                                <br/>El Sr. Hogan también se ha apoyado en su esposa, Yumi Hogan, inmigrante coreana, 
                                que también estuvo en la convención del gobernador, que incluyó una cena en la casa del
                                embajador coreano. Como primera primera dama coreana de la historia de Estados Unidos, 
                                Hogan se ha convertido en una especie de icono en Corea del Sur. Cogí a mi mujer y le 
                                dije: "Mira, tú hablas coreano. Conoces al presidente. Tú eres la primera dama. Conoces 
                                al embajador. Vamos a hablar con ellos en coreano, y decirles que necesitamos su ayuda. 
                                Las empresas en el Sur Corea dijeron que harían pruebas.</p>
                            <div className="space-40"/>
                            <img src={big2} alt="big2"/>
                            <div className="space-40"/>
                            <p>En términos globales, Estados Unidos es el país con más casos de Covid-19: más de 245.000. 
                            Y las autoridades estadounidenses afirmaron que en las últimas 24 horas han muerto más de 1.000 
                            horas, el mayor número de muertes diarias hasta ahora en el mundo.
                                <br/>
                                <br/>Los hospitales y las morgues de Nueva York se esfuerzan por hacer frente a la pandemia, 
                                y el gobernador de Nueva York, Andrew Cuomo, ha advertido que Nueva York corre el riesgo de 
                                quedarse sin ventiladores para los pacientes en seis días.</p>
                            <div className="space-40"/>
                            <div className="tags">
                                <ul className="inline">
                                    <li className="tag_list"><FontAwesome name="tag"/> tags</li>
                                    <li><Link to="/">Salud</Link></li>
                                    <li><Link to="/">Mundo</Link></li>
                                    <li><Link to="/">Corona</Link></li>
                                </ul>
                            </div>
                            <div className="space-40"/>
                            <div className="border_black"/>
                            <div className="space-40"/>
                            <PostOnePagination/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <WidgetTab/>
                            <FollowUs title="Síguenos"/>
                            <WidgetTrendingNews/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <MostShareWidget title="Lo Más Compartido"/>
                            <NewsLetter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-60"/>
            <OurBlogSection/>
            <div className="space-60"/>
            <BlogComment/>
            <div className="space-100"/>
            <BannerSection/>
            <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                        onClose={() => setvModal(false)}/>
        </Fragment>
    )
};

export default VideoPostOnePage;