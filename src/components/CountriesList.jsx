import React from 'react'
import CityItem from './CityItem'
import styles from './CountriesList.module.css'
import Message from './Message'
import Spinner from './Spinner'

function CountriesList({ cities = [], isLoading = false }) {
  // ローディング中表示
  if (isLoading) return <Spinner />

  // データが空のときのメッセージ表示
  if (!cities.length) {
    return <Message message="Add your first city by clicking on a city on the map" />
  }

  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default CountriesList
