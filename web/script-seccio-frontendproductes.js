
class ObjSeccioFrontendProductes {

    constructor () {
    }

    async iniciaSeccio () {
        let refLoading = document.getElementById('productesLoading'),
            refContinguts = document.getElementById('productesContinguts'),
            objRebut = null,
            valor = null,
            codiHTML = '',
            cntProducte = 0

        // Amaguem els continguts actuals i mostrem la càrrega
        refContinguts.style.display = 'none'
        refLoading.style.display = 'flex'

        // Demanem el llistat de productes al servidor
        objRebut = await promiseCallServer('POST', '/call/llistatProductes', {})

        // Transformem l'objecte rebut en codi HTML
        codiHTML = codiHTML + '<div class="primera-seccion-productos">'
            codiHTML = codiHTML + '<div class="contenedor-imagen-oferta-dia">'
                codiHTML = codiHTML + '<img class="imagen-oferta-dia" src="/web/imatges/oferta-madrid.jpeg" width="100%" height="460px"/>'
            codiHTML = codiHTML + '</div>'
            codiHTML = codiHTML + '<div class="texto-oferta-dia">'
                codiHTML = codiHTML + '<div class="texto-oferta-dia-izq">'
                    codiHTML = codiHTML + '<h1>¡Oferta del dia!</h1>'
                codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '<div class="texto-oferta-dia-der">'
                    codiHTML = codiHTML + '<h3>Conocer Madrid por solo 50€</h3>'
                    codiHTML = codiHTML +  '<p>¡OFERTA DE LA SEMANA! Aprovecha esta gran oportunidad, de conocer la capital de España, por tan solo 50€, no te lo pierdas!!<p>'
                    codiHTML = codiHTML + '<div class="boton-compra-dia">'
                            codiHTML = codiHTML + '<div class="letra-boton-compra">Comprar</div>'
                    codiHTML = codiHTML + '</div>'
                codiHTML = codiHTML + '</div>'
            codiHTML = codiHTML + '</div>'
        codiHTML = codiHTML + '</div>'

        codiHTML = codiHTML + '<div class="segunda-seccion-productos">'
            codiHTML = codiHTML + '<h1>Ofertas del Mes</h1>'
            codiHTML = codiHTML + '<div class="productos-oferta-del-mes">'
            if (objRebut.resultat === 'ok') {  
                for (cntProducte = 0; cntProducte < objRebut.missatge.length; cntProducte = cntProducte + 1) {
                    valor = objRebut.missatge[cntProducte]
                    codiHTML = codiHTML + '<div class="boton-oferta" onclick=\'navegacio.canviaSeccio("frontendProducte&' + valor.id + '")\'>'
                        codiHTML = codiHTML + '<img src="' + valor.imatge + '" width="100%" + height="50%" />'
                        codiHTML = codiHTML + '<h3>' + valor.nom +'</h3>'
                        codiHTML = codiHTML + '<div>' + valor.descripcio +'</div>'
                        codiHTML = codiHTML + '<div>' + valor.preu +' € tarifa mediana</div>'
                        codiHTML = codiHTML + '<div class="boton-compra">'
                            codiHTML = codiHTML + '<div class="letra-boton-compra">Comprar</div>'
                        codiHTML = codiHTML + '</div>'
                    codiHTML = codiHTML + '</div>'
                }
            }
            codiHTML = codiHTML + '</div>'
        codiHTML = codiHTML + '</div>'
        
        // Amaguem la càrrega i mostrem el llistat de productes
        refContinguts.innerHTML = codiHTML
        refContinguts.style.display = 'flex'
        refLoading.style.display = 'none'
    }
}