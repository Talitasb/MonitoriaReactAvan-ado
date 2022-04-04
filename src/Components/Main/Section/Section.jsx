import  './Section.css'
import Card from '../Card/Card'
import fotoTcc from '../../../assets/img/fotoTcc.jpg'
import fotoSiteCarros from '../../../assets/img/fotoSiteCarros.jpg'

export default () =>{
    return(
        <section className="divCards container-fluid">
      <Card foto={fotoSiteCarros}></Card>
        <Card foto={fotoTcc}></Card>
        </section>
    )
}