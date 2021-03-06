// Packages
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// Components
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";
import BlogComment from "../../components/BlogComment";
import OurBlogSection from "../../components/OurBlogSection";

// images
import banner2 from "../../assets/img/bg/sidebar-1.png";
import big2 from '../../assets/img/blog/big2.jpg';
import author2 from '../../assets/img/author/author2.png';
import quote from '../../assets/img/icon/q.png';
import quote_1 from '../../assets/img/blog/quote_1.jpg';
import big1 from '../../assets/img/blog/big1.jpg';
import smail1 from '../../assets/img/blog/smail1.jpg';
import single_post1 from '../../assets/img/blog/single_post1.jpg';

const PostOnePage = () => {
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
                                <h1>El ??xito del virus en Jap??n ha desconcertado al mundo. ??Se le est?? acabando la suerte?</h1>
                                <div className="space-10"/>
                                <p>La propiedad, que cuenta con una sala de proyecci??n de 30 plazas,
                                    un anfiteatro de 100 plazas y un estanque de nataci??n con...</p>
                            </div>
                            <div className="space-40"/>
                            <img src={single_post1} alt="thumb"/>
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
                                            <li><Link to="/">Marzo 26, 2020 </Link></li>
                                            <li> Actualizado 1:58 p.m. ET</li>
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
                            <p>Se retirar??n los entes de algunos hospitales de Nueva York y se redistribuir??n a las zonas
                                m??s afectadas del estado, seg??n una orden que firmar?? el gobernador Andrew Cuomo.
                                <br/>
                                <br/>En Nueva York se produjo el mayor aumento de muertes en un solo d??a, con 562 hasta 2.935,
                                casi la mitad de todas las muertes relacionadas con el virus que se registraron ayer en Estados
                                Unidos. La Casa Blanca podr??a aconsejar a los habitantes de los focos del virus que lleven la 
                                cara cubierta en p??blico para ayudar a frenar la propagaci??n.\<br/><br/>tados Unidos tiene ahora
                                245.658 casos de Covid-19.<br/><br/>La escasez de varios centenares de respiradores en la ciudad
                                de Nueva York, el epicentro del brote en EE.UU., hizo que el Sr. Cuomo dijera que iba a ordenar
                                que se retiraran las m??quinas de varias partes del estado para entregarlas a las zonas m??s afectadas.
                                <br/><br/>En medio de una crisis cada vez m??s profunda, el <span className="bold"> Dr. Anthony Fauci,
                                </span>  alto funcionario de salud, ha dicho que cree que todos los estados deber??an emitir ??rdenes de permanencia..
                                <br/>
                                <br/>???No entiendo por qu?? no se hace", dijo el Dr. Fauci
                                a la CNN el jueves. "Si miras lo que est?? pasando en
                                ste pa??s, simplemente no entiendo por qu?? no estamos haciendo ingthat.???
                                <br/>
                                <br/>???Hay que pisar el acelerador para
                                bajar esa cifra", a??adi??, refiri??ndose
                                a las tasas de infecci??n y muerte.</p>
                            <div className="space-40"/>
                            <div className="points">
                                <ul>
                                    <li>??Deber??amos llevar m??s mascarillas?</li>
                                    <li>Por qu?? algunos pa??ses usan mascarillas y otros no</li>
                                    <li>Coronavirus: ??Son seguras las mascarillas caseras?</li>
                                </ul>
                            </div>
                            <div className="space-40"/>
                            <p>Los comentarios del Dr. Fauci, que dirige el Instituto Nacional de Alergias
                                y Enfermedades Infecciosas, parec??an contradecir los del presidente Trump,
                                que ha descartado sistem??ticamente la idea de un cierre a nivel nacional.
                                <br/>
                                <br/>???Es terriblemente dif??cil decir: 'cierren'.
                                Tenemos que tener un poco de flexibilidad", dijo Trump el mi??rcoles.</p>
                            <div className="space-40"/>
                            <h3>??Cu??l es el debate sobre las m??scaras?</h3>
                            <div className="space-20"/>
                            <p>Tanto los Centros para el Control de Enfermedades (CDC) como la Organizaci??n
                            Mundial de la Salud (OMS) est??n reevaluando sus orientaciones sobre las mascarillas,
                            mientras los expertos se apresuran a encontrar formas de combatir contra el virus altamente contagioso.
                                <br/>
                                <br/>El Covid-19 se transmite en gotitas en el aire procedentes de personas que
                                tosen o estornudan, pero existe cierta controversia sobre la distancia que deben 
                                tomar las personas, y si las m??scaras son ??tiles cuando las usa el p??blico.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={smail1} alt="smail1"/>
                                </div>
                                <div className="col-md-6">
                                    <p>La OMS aconseja que las mascarillas ordinarias s??lo son eficaces si se 
                                    combinan con con un lavado de manos cuidadoso y un distanciamiento social,
                                    y hasta ahora no las recomienda hasta ahora no las recomienda en general para las personas sanas.
                                        <br/>
                                        <br/>Sin embargo, cada vez son m??s los expertos en salud que afirman que
                                        existen beneficios. Sostienen que el uso p??blico de mascarillas puede ayudar
                                        principalmente a prevenir a los pacientes asintom??ticos - personas que han sido
                                        infectadas con Covid-19 pero no son conscientes de ello y no muestran ning??n s??ntoma.
                                        que no sepan que est??n infectados por el virus.</p>
                                </div>
                            </div>
                            <div className="space-40"/>
                            <p>Las mascarillas tambi??n pueden ayudar a reducir el riesgo de contraer el virus
                                a trav??s de las de estornudos o tos de otra persona, y se puede ense??ar a la 
                                gente a ponerse y quitarse la mascarilla correctamente. a ponerse y quitarse 
                                las mascarillas correctamente, afirman.
                                <br/>
                                <br/>El jueves, el alcalde de Nueva York, Bill de Blasio, inst?? a todos los 
                                neoyorquinos a cubrirse la cara cuando est??n al aire libre y cerca de otras 
                                personas, pero no a utilizar mascarillas quir??rgicas, que son escasos.
                                <br/>
                                <br/>???Puede ser una bufanda. Puede ser algo que crees t?? mismo en casa. Puede
                                ser un pa??uelo", dijo. El gobernador Cuomo se pronunci?? el viernes, diciendo 
                                "creo que es justo decir que las m??scaras no pueden da??o a menos que te den una 
                                falsa sensaci??n de seguridad.???
                                <br/>
                                <br/>Mientras tanto, los residentes de Laredo (Texas) se enfrentar??n a una multa
                                de 1.000 d??lares (816 libras) si no se cubren la nariz y la boca de la ciudad 
                                emitieron una ordenanza de emergencia para sus de emergencia a sus aproximadamente
                                250.000 habitantes.
                            </p>
                            <div className="space-40"/>
                            <h3>??Qu?? estados no est??n bloqueados?</h3>
                            <div className="space-20"/>
                            <p>Tanto los Centros para el Control de Enfermedades (CDC) de EE.UU. como la 
                            Organizaci??n Mundial de la Salud (OMS) est??n reevaluando sus orientaciones sobre 
                            las mascarillas, mientras los expertos se apresuran a encontrar formas de combatir
                            el virus altamente contagioso.
                                <br/>
                                <br/>El Covid-19 se transmite en las gotas de aire de las personas que tosen o 
                                estornudan, pero hay cierta controversia sobre la distancia que deben tomar las
                                personas entre s??, y sobre la utilidad de las mascarillas cuando las usa el p??blico.</p>
                            <div className="space-40"/>
                            <img src={big1} alt="big1"/>
                            <p className="img_desc"><span>Acabo de tener un beb?? - ahora voy a la primera l??nea.</span></p>
                            <div className="space-40"/>
                            <p>Las mascarillas tambi??n pueden ayudar a reducir el riesgo de que las personas contraigan el 
                            virus a trav??s de las gotas de los estornudos o la tos de otra persona, y se puede ense??ar a 
                            las personas a ponerse y quitarse las mascarillas correctamente, afirman.
                                <br/>
                                <br/>El jueves, el alcalde de Nueva York, Bill de Blasio, inst?? a todos los neoyorquinos 
                                a cubrirse la cara sus rostros cuando est??n fuera y cerca de otros, pero que no usen m??scaras 
                                quir??rgicas que son escasos.
                                <br/>
                                <br/>Mientras tanto, los residentes de Laredo (Texas) se enfrentar??n a una multa de 1.000 d??lares
                                (816 libras) si no se cubren la nariz y la boca mientras est??n de la ciudad emitieron una ordenanza 
                                de emergencia para sus de emergencia para sus aproximadamente 250.000 habitantes.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={quote_1} alt="quote"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="qhote">
                                        <img src={quote} alt="quote"/>
                                        <p>Debo explicarles c??mo naci?? toda esta idea err??nea que denuncia el 
                                        placer y alaba el dolor. placer y alabando el dolor naci?? y os dar?? una
                                        completa del sistema, y expondr?? las verdaderas ense??anzas del gran explorador
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
                            <p>Al d??a siguiente volv?? con mi equipo y le dije: "Esto es lo que acabo de o??r, 
                                tenemos que prepararnos, dijo. Sab??amos que no iba a pasar mucho tiempo antes
                                de que fu??ramos que nos enfrent??ramos a ello.
                                <br/>
                                <br/>El Sr. Hogan tambi??n se ha apoyado en su esposa, Yumi Hogan, inmigrante coreana, 
                                que tambi??n estuvo en la convenci??n del gobernador, que incluy?? una cena en la casa del
                                embajador coreano. Como primera primera dama coreana de la historia de Estados Unidos, 
                                Hogan se ha convertido en una especie de icono en Corea del Sur. Cog?? a mi mujer y le 
                                dije: "Mira, t?? hablas coreano. Conoces al presidente. T?? eres la primera dama. Conoces 
                                al embajador. Vamos a hablar con ellos en coreano, y decirles que necesitamos su ayuda. 
                                Las empresas en el Sur Corea dijeron que har??an pruebas.</p>
                            <div className="space-40"/>
                            <img src={big2} alt="big2"/>
                            <div className="space-40"/>
                            <p>En t??rminos globales, Estados Unidos es el pa??s con m??s casos de Covid-19: m??s de 245.000. 
                            Y las autoridades estadounidenses afirmaron que en las ??ltimas 24 horas han muerto m??s de 1.000 
                            horas, el mayor n??mero de muertes diarias hasta ahora en el mundo.
                                <br/>
                                <br/>Los hospitales y las morgues de Nueva York se esfuerzan por hacer frente a la pandemia, 
                                y el gobernador de Nueva York, Andrew Cuomo, ha advertido que Nueva York corre el riesgo de 
                                quedarse sin ventiladores para los pacientes en seis d??as.</p>
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
                            <FollowUs title="S??guenos"/>
                            <WidgetTrendingNews/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <MostShareWidget title="Lo M??s Compartido"/>
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
        </Fragment>
    )
};

export default PostOnePage;