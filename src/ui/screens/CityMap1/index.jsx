import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import Location from '../../components/Location'

const CityMap1 = () => {
  const { state } = useContext(AppContext)

  return (
    <div>
      <h1>CityMap1</h1>
      Money:{state.money.money}
      <Location
        indices={{ start: 0, end: 9 }}
        locationId={0}
        name={'Restaurant'}
        fromMapId={1}
      />
      <Link to="/city1">
        <button>Back</button>
      </Link>
      <Link to="/city2">
        <button>Next</button>
      </Link>
    </div>
  )
}

export default CityMap1
