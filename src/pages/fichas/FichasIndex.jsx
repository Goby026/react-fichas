import { fichas } from '../../data/data'

export const FichasIndex = () => {
  return (
    <>
        <ul>
          { fichas.map( (ficha)=> ( <li key={ficha.id} >{ ficha.id +' '+ficha.usuario }</li> ) ) }
        </ul>
    </>
  )
}
