
class ObjSeccioFrontendProducte {

    constructor () {
    }

    async iniciaSeccio (idProducte) {
        let refLoading = document.getElementById('producteLoading'),
            refContinguts = document.getElementById('producteContinguts'),
            objRebut = null,
            valor = null,
            codiHTML = '',
            cntProducte = 0,

        // Creacion de variables, con distintos valores para cada producto
            //bajatemp      =   Fecha de baja temporada Nápoles Palma de Mallorca Orlando
            //altatemp      =   Fecha de alta temporada
            //preciomed     =   Precio medio
            //mejprecio     =   Mejor precio
            //bajprecio     =   Bajada de precio esperada
            //subpre        =   Subida de precio esperada
            destinos = {
            "Tenerife":{
                "bajatemp":'Enero',
                "altatemp":'Junio',
                "preciomed":350,
                "mejorprecio":100,
                "bajprecio":53,
                "subpre":60
                },
            "Nápoles":{
                "bajatemp":'Octubre',
                "altatemp":'Agosto',
                "preciomed":530,
                "mejorprecio":345,
                "bajprecio":35,
                "subpre":40
            },
            "Palma de Mallorca":{
                "bajatemp":'Diciembre',
                "altatemp":'Junio',
                "preciomed":420,
                "mejorprecio":200,
                "bajprecio":53,
                "subpre":60 
            },
            "Orlando":{
                "bajatemp":'Febrero',
                "altatemp":'Julio',
                "preciomed":845,
                "mejorprecio":507,
                "bajprecio":40,
                "subpre":70 
            }
            }

        // Amaguem els continguts actuals i mostrem la càrrega
        refContinguts.style.display = 'none'
        refLoading.style.display = 'flex'

        // Demanem el llistat de productes al servidor
        objRebut = await promiseCallServer('POST', '/call/llistatProductes', { id: idProducte })

        // Transformem l'objecte rebut en codi HTML
        if (objRebut.resultat === 'ok' && objRebut.missatge.length === 1) {
            valor = objRebut.missatge[0]
            codiHTML = codiHTML + '<div class="detall" onclick=\'navegacio.canviaSeccio("frontendProducte&' + cntProducte + '")\'>'
            codiHTML = codiHTML + '<div class="primera-seccion-producte">'
                codiHTML = codiHTML + '<div class="contenedor-imagen-oferta-dia">'
                    codiHTML = codiHTML + '<img class="imagen-producte"src="' + valor.imatge + '" width="100%" height="460px"/>'
                codiHTML = codiHTML + '</div>'  
                codiHTML = codiHTML + '<div class="texto-oferta-dia">'
                    codiHTML = codiHTML + '<div class="texto-oferta-dia-izq">'
                        codiHTML = codiHTML + '<h1>' + valor.nom + '</h1>'
                    codiHTML = codiHTML + '</div>'
                    codiHTML = codiHTML + '<div class="texto-oferta-dia-der-producte">'
                        codiHTML = codiHTML + '<h3>' + valor.descripcio + '</h3>'
                        codiHTML = codiHTML + '<h3>' + valor.preu +' € </h3>'
                    codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '</div>'
            codiHTML = codiHTML + '</div>'

            codiHTML = codiHTML + '<div class="segunda-seccion-producte">'
                    codiHTML = codiHTML + '<div class="cosejos-viaje">'
                        codiHTML = codiHTML + '<h3 class="titulo-segunda-seccion-preoducte">Consejos - Vuelos de Aeropuerto de Barcelona - El Prat a ' + valor.nom + '</h3>'
                            codiHTML = codiHTML + '<div class="info-producte">'
                                codiHTML = codiHTML + '<div class="info-producte-seccion">'
                                //Fecha de baja temporada
                                        codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                            codiHTML = codiHTML + '<div class="dato-cuadro">Temporada Baja:</div>'
                                                codiHTML = codiHTML + '<h3>' + destinos[valor.nom].bajatemp + '</h3>'
                                        codiHTML = codiHTML + '</div>'

                                //Fecha de alta temporada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Temporada Alta:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].altatemp + '</h3>'
                                    codiHTML = codiHTML + '</div>'
                    
                                //Precio medio
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Precio medio:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].preciomed + ' € </h3>'
                                    codiHTML = codiHTML + '</div>'
                                    
/*Cerramos 1eraseccion*/        codiHTML = codiHTML + '</div>'
/*Abrimos 2daseccion*/          codiHTML = codiHTML + '<div class="info-producte-seccion">'
                                //Mejor precio
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Mejor precio:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].mejorprecio + ' € </h3>'
                                    codiHTML = codiHTML + '</div>'

                                //Bajada de precio esperada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Bajada de precios esperada:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].bajprecio + ' % </h3>'
                                    codiHTML = codiHTML + '</div>'

                                //Subida de precio esperada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Subida de precios esperada:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].subpre + ' % </h3>'
                                    codiHTML = codiHTML + '</div>'

                                codiHTML = codiHTML + '</div>' 
                            codiHTML = codiHTML + '</div>' 
                            
            //MISMA SECCION PERO PARA MOVIL

                            codiHTML = codiHTML + '<div class="info-producte-movil">'
                                codiHTML = codiHTML + '<div class="info-producte-seccion-movil">'
                                //Fecha de baja temporada
                                        codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                            codiHTML = codiHTML + '<div class="dato-cuadro">Temporada Baja:</div>'
                                                codiHTML = codiHTML + '<h3>' + destinos[valor.nom].bajatemp + '</h3>'
                                        codiHTML = codiHTML + '</div>'

                                //Fecha de alta temporada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Temporada Alta:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].altatemp + '</h3>'
                                    codiHTML = codiHTML + '</div>'
                    
                                codiHTML = codiHTML + '</div>'
                                codiHTML = codiHTML + '<div class="info-producte-seccion-movil">'
                                //Precio medio
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Precio medio:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].preciomed + ' € </h3>'
                                    codiHTML = codiHTML + '</div>'
                                    
                                //Mejor precio
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Mejor precio:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].mejorprecio + ' € </h3>'
                                    codiHTML = codiHTML + '</div>'

                                codiHTML = codiHTML + '</div>'
                                codiHTML = codiHTML + '<div class="info-producte-seccion-movil">'
                                //Bajada de precio esperada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Bajada de precios esperada:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].bajprecio + ' % </h3>'
                                    codiHTML = codiHTML + '</div>'

                                //Subida de precio esperada
                                    codiHTML = codiHTML + '<div class="cuadro-info-producte">' 
                                        codiHTML = codiHTML + '<div class="dato-cuadro">Subida de precios esperada:</div>'
                                            codiHTML = codiHTML + '<h3>' + destinos[valor.nom].subpre + ' % </h3>'
                                    codiHTML = codiHTML + '</div>'

                                codiHTML = codiHTML + '</div>' 
                            codiHTML = codiHTML + '</div>' 
                    //SE TERMINA LA SECCION MOVIL
                    codiHTML = codiHTML + '</div>'
            codiHTML = codiHTML + '</div>'

            codiHTML = codiHTML + '<div class="tercera-seccion-producte">'
                codiHTML = codiHTML + '<img class="imagen-producte-ofertas" src="/web/imatges/tesla2.jpg" width="50%" height="400px"/>'
                codiHTML = codiHTML + '<div class="tercera-seccion-producte-der">'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<h3>Alquila un Coche</h3>'
                    codiHTML = codiHTML + '<div class= "texto-oferta-coche">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ullam error eius culpa praesentium accusamus, dolore sit, accusan necessitatibus impedit eveniet cumque explicabo omnis ab assu soluta adipisci rerum.</div>'
                    codiHTML = codiHTML + '<div class= "texto-oferta-coche">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ullam error eius culpa praesentium accusamus, dolore sit, accusan necessitatibus impedit eveniet cumque explicabo omnis ab assu soluta adipisci rerum.</div>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<div class="boton-compra-dia">'
                            codiHTML = codiHTML + '<div class="letra-boton-compra"><a href="https://www.tesla.com/es_es/modelx"><i class="material-icons">local_taxi</i></a></div>'
                    codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '</div>'
            codiHTML = codiHTML + '</div>'

            codiHTML = codiHTML + '<div class="tercera-seccion-producte">'
                codiHTML = codiHTML + '<div class="tercera-seccion-producte-der">'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<h3>¿Donde te quedaras?</h3>'
                    codiHTML = codiHTML + '<div class= "texto-oferta-coche">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ullam error eius culpa praesentium accusamus, dolore sit, accusan necessitatibus impedit eveniet cumque explicabo omnis ab assu soluta adipisci rerum.</div>'
                    codiHTML = codiHTML + '<div class= "texto-oferta-coche">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum ullam error eius culpa praesentium accusamus, dolore sit, accusan necessitatibus impedit eveniet cumque explicabo omnis ab assu soluta adipisci rerum.</div>'
                    codiHTML = codiHTML + '<br/>'
                    codiHTML = codiHTML + '<div class="boton-compra-dia">'
                            codiHTML = codiHTML + '<div class="letra-boton-compra"><a href="https://www.trivago.es/"><i class="material-icons">hotel</i></a></div>'
                    codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '<img class="imagen-producte-ofertas" src="/web/imatges/imagen-segunda-seccion-der.jpg" width="50%" height="400px"/>'
            codiHTML = codiHTML + '</div>'
        }

        // Amaguem la càrrega i mostrem el llistat de productes
        refContinguts.innerHTML = codiHTML
        refContinguts.style.display = 'flex'
        refLoading.style.display = 'none'
    }
}