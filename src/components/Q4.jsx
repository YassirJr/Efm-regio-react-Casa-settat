import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Q4() {
    const pays = useSelector(state => state.pays);
    return (
        <div className='container'>
            <ul className="nav d-flex gap-4 my-3 justify-content-center  ">
                {
                    pays.map(e => (
                        <li className="nav-item" key={e.codePays}>
                            <Link to={`/pays/${e.anneeIndependance}`}>annee Independance : {e.anneeIndependance}</Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default Q4