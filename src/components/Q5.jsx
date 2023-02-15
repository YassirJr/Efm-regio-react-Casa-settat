/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom'
import { ajouterVille, modifierPopulation } from '../store/actions';

function Q5() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { paysCode } = useParams()
    const [newPopulation, setnewPopulation] = useState(0)
    const [dataAjouter, setdataAjouter] = useState(
        {
            nomVille: "",
            district: "",
            population: null,
            capitale: null
        }
    )
    const handleChangeAjouter = (e) => {
        const { name, value } = e.target
        setdataAjouter(prevState => ({ ...prevState, [name]: value }))
    }
    const formEdit = <div>
        <input type="number" name="population" id="" className='form-control mx-2 my-3' onChange={(e) => setnewPopulation(e.target.value)} />
        <button className='btn btn-primary' onClick={() => dispatch(modifierPopulation(newPopulation, paysCode))}>Editer</button>
    </div>
    const formAjouter = <div>
        <label htmlFor="">Nom Ville :</label>
        <input type="text" name="nomVille" className='form-control mx-2 my-3' onChange={handleChangeAjouter} />
        <label htmlFor="">District Ville :</label>
        <input type="text" name="district" className='form-control mx-2 my-3' onChange={handleChangeAjouter} />
        <label htmlFor="">Population Ville :</label>
        <input type="text" name="population" className='form-control mx-2 my-3' onChange={handleChangeAjouter} />
        <label htmlFor="">Ville Capital:</label>
        <input type="radio" name="capitale" value={true} className='form-check-input mx-2' onChange={handleChangeAjouter} />
        <label className='form-check-label'>true</label>
        <input type="radio" name="capitale" value={false} className='form-check-input mx-2' onChange={handleChangeAjouter} />
        <label className='form-check-label'>false</label><br />
        <button className='btn btn-primary my-3' onClick={() => dispatch(ajouterVille(dataAjouter, paysCode))}>Ajouter</button>
    </div>
    return (
        location.pathname.includes('ajouter-ville') ? formAjouter : formEdit
    )
}

export default Q5