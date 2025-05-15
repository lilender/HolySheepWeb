import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import InfoCard from './InfoCard';
import CardGroup from 'react-bootstrap/CardGroup';

function Wiki() {
    return (
        <div>
            <style type="text/css">
                {`
                    .list {
                        grid-area: list;
                    }
                    .intro {
                        grid-area: intro;
                    }
                    .content {
                        grid-area: content;
                    }
                    .ordered-grid {
                        display: grid;
                        gap: 10px;
                    }

                    @media (max-width: 768px) {
                        .ordered-grid {
                            grid-template-areas: 
                                "intro"
                                "list"
                                "content";
                            grid-template-rows: auto auto 1fr;
                            grid-template-columns: 1fr;
                        }
                    }
                    
                    @media (min-width: 769px) {
                        .ordered-grid {
                            grid-template-areas: 
                                "list intro"
                                "list content";
                            grid-template-rows: auto 1fr;
                            grid-template-columns: 250px 1fr;
                            min-height: 100vh;
                        }
                    }

                    .list-group-item {
                        font-family: 'Open Sans', sans-serif;
                        background-color: transparent;
                        border: none;
                        border-top-left-radius: 0px !important;
                        border-top-right-radius: 0px !important;
                        border-bottom-left-radius: 0px !important;
                        border-bottom-right-radius: 0px !important;
                    }
                    .list-group-item:hover {
                        background-color: #3DA17F;
                        border: none;
                    }
                    .list-group-item.active {
                        background-color: #3DA17F;
                        border: none;
                    }

                    .tab-content {
                        font-family: 'Open Sans', sans-serif;
                    }
                `}
            </style>
            <NavBar />
            <Tab.Container defaultActiveKey="#personajes">
                <div className='ordered-grid bg-h'>
                    <div className="bg-g list">
                        <ListGroup>
                            <ListGroup.Item action href="#personajes">
                            Personajes
                            </ListGroup.Item>
                            <ListGroup.Item action href="#historia">
                            Historia
                            </ListGroup.Item>
                            <ListGroup.Item action href="#armas">
                            Armas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#ovejas">
                            Ovejas
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="intro p-3 pb-0">
                        <h1 className='lilita-one-regular'>Wiki</h1>
                        <p className='open-sans-regular'>En esta sección encontrarás información sobre los personajes, armas y ovejas de Holy Sheep.</p>
                    </div>
                    
                    <div className='content p-3'>
                        <Tab.Content>
                            <Tab.Pane eventKey="#personajes">
                                <h1 className='schoolbell-bold'>Personajes</h1>
                                <CardGroup>
                                    <InfoCard img='/holysheep/images/gregor.jpg' title='Gregor' text='Un granjero que se siente traicionado por su amor, Liliana.'/>
                                    <InfoCard img='/holysheep/images/liliana.jpg' title='Liliana' text='Una granjera que se siente traicionada por su amor, Gregor.'/>
                                    <InfoCard img='/holysheep/images/oveja.jpg' title='Oveja' text='Una oveja que se siente traicionada por sus padres, Liliana y Gregor.'/>
                                </CardGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#historia">
                                <h1 className='schoolbell-bold'>Historia</h1>
                                <p>Gregor y Liliana estuvieron comprometidos una vez, deseosos de vivir una vida tranquila en la granja que lograron construir tras la quiebra de la bolsa de valores. Pensaron que alejarse de la civilización sería lo mejor cuando la hambruna tocó su puerta y la escasez comenzó. Por suerte, un viejo pastor les confió su rebaño de ovejas, con el cual se pudieron dar abasto para sobrevivir. El estrés del hambre constante y la vida errática de un mundo moribundo empezó a mermar en su relación, Liliana se sentía decepcionada de como las discusiones evolucionaban, pero ella creía que su amor lograría perdurar. </p>
                                <p>Cerca de su destino, el final comenzó en medio de una de sus peleas. Ambos recuerdan una explosión y una sacudida, la tierra se partió en dos y las ovejas corrieron en diferentes direcciones mientras el cielo se caía a pedazos. Liliana nunca olvidó cuando el rebaño, enloquecido, los separó en diferentes direcciones. La fuerza de las ovejas asustadas fue suficiente para tirarla al suelo, pensó que Gregor iría a salvarla, pero no lo hizo. Apenas se refugió junto a una saliente y cuando lo que quedaba del rebaño con ella se calmó, no dejaron de seguirla. Liliana no tenía idea de qué había sido de Gregor, pero ese fue el día en que el amor se convirtió en odio.</p>
                                <p>Gregor recuerda las últimas palabras que Liliana le dijo, un recordatorio de sus inseguridades al llamarlo cobarde, se giró, dejándola con la palabra en la boca para buscar un lugar donde calmarse. El enojo solo se vio superado por el miedo al ver como el cataclismo final comenzaba, se dio la vuelta y corrió hacia Liliana. Sin embargo, la estampida de ovejas lo hizo tropezar y caer colina abajo, estampando su cabeza fuertemente contra una piedra. Cuando volvió en sí, solo estaba medio rebaño consigo. Subió la colina, y en la distancia pudo reconocer a Liliana, alejándose con la otra mitad del rebaño siguiéndola.</p>
                                <p>El tiempo pasó, ambos creyeron que el otro le había abandonado. Gregor ni siquiera quería conservar a las ovejas que aún lo seguían, pero con el tiempo se volvieron una fuente económica para él. Los comerciantes que se topaba pertenecían siempre a una misma compañía, pero nunca le importó, no mientras le dieran bienes por ovejas. Cansado de viajar decidió asentarse y a pesar de los recuerdos dolorosos no tenía más opción que volver al único lugar que podía llamar suyo después de haberlo abandonado a la espera de Liliana. La joven, vivió de forma similar, y tal cual como cuando se conocieron, ambos tuevieron la idea de ir al mismo lugar.</p>
                                <p>Debido a circunstancias que no conocemos … ciertas ovejas tuvieron alteraciones en su naturaleza y mutaron, haciendo que algunas de ellas tengan efectos entre el rebaño y entre los propios granjeros,  Liliana sospecha de la compañía extraña de comerciantes debido a la inusual cantidad de recursos que poseen. Por otro lado, Gregor solo cree que se debe a algún efecto secundario de los cataclismos de la tierra o de algún arma de alguno de los países en conflicto.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#armas">
                                <h1 className='schoolbell-bold'>Armas</h1>
                                <p>Las armas disponibles en Holy Sheep:</p>
                                <CardGroup>
                                    <InfoCard title='LanalLink 5G' text='No hay límite de disparo, pero no es capaz de contener y almacenar ovejas especiales.'/>
                                    <InfoCard title='SheepSync Extractor' text='Diseñada para soportar los anormales poderes de las ovejas especiales, es capaz de contener a tres de ellas, pero solo puede disparar una a la vez.'/>
                                </CardGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#ovejas">
                                <h1 className='schoolbell-bold'>Ovejas</h1>
                                <p>Tipos de ovejas en Holy Sheep:</p>
                                <CardGroup>
                                    <InfoCard img='/holysheep/images/teleport.jpg' title='Teleport sheep' text='Al lanzar esta oveja, el jugador se teletransporta al lugar en el que esta aterrizó.'/>
                                    <InfoCard img='/holysheep/images/stinky.jpg' title='Stinky sheep' text='Esta oveja aleja a las demás ovejas en un área de efecto.'/>
                                    <InfoCard img='/holysheep/images/electric.jpg' title='Electric sheep' text='Esta oveja electrocuta al oponente, dejándolo paralizado.'/>
                                </CardGroup>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
            <Footer />
        </div>
    );
}

export default Wiki;