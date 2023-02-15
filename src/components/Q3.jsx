import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Q3() {
    const { pays } = useSelector(state => state)
    const { anneeIndependance } = useParams();
    const paysFiltred = anneeIndependance ? pays.filter(e => Number(e.anneeIndependance) === Number(anneeIndependance)) : pays
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center gap-3 flex-wrap p-3">
                {
                    paysFiltred.map(e => (
                        <div className="card col-3 p-3 " key={e.codePays}>
                            <img src={e.imgUrl} alt="" className='rounded' style={{ height: '250px' }} />
                            <div className="card-body">
                                <h3 className="card-title">{e.nomPays}</h3>
                                <p className="card-text">{e.surface}{e.population}</p>
                                <Link to={`/${e.codePays}/modifier-ville`} className="btn btn-secondary">Modifier</Link>
                                <Link to={`/${e.codePays}/ajouter-ville`} className="btn btn-primary mx-2">Ajouter Ville</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Q3