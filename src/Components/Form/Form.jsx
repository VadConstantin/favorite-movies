import React, { useEffect, useState, useCallback } from 'react'
import './form.css'
import { Link } from 'react-router-dom'

const Form = (props) => {

  // checking if myData from localStorage already exists ( means if user already entered info )
  // if Yes = we init state to the data previously saved
  // if not, initial state = {}
  const initValue = localStorage.getItem("myData") !== null ?
    JSON.parse(localStorage.getItem('myData')) :
    {}

  const [profile, setProfile] = useState(initValue)

  const handleSubmit = useCallback((e) => {

    e.preventDefault()

    const form = e.currentTarget
    const firstName = form.elements.firstName.value
    const familyName = form.elements.familyName.value
    const isLiveInFrance = form.elements.location.checked

    setProfile((prev) => {
      return {...prev,
      firstName: firstName,
      familyName: familyName,
      isLiveInFrance: isLiveInFrance
      }
    })
  }, [])

  const saveDataToLocalStorage = useCallback(() => {
    localStorage.setItem('myData', JSON.stringify(profile))
  }, [profile])

  useEffect(() => {
    saveDataToLocalStorage()
  }, [saveDataToLocalStorage])

  const getNameFromLocalStorage = (name) => {
    const title = JSON.parse(localStorage.getItem(name)).title
    return title.length > 13 ?
      title.substring(0, 13) + " ..." :
      title
  }

  const handleDeleteFav = (n) => {
    localStorage.removeItem(n)
    window.location.reload()
  }

  const favoriteTvShowsRanks = Object.keys(localStorage).filter(rank => parseInt(rank))
  // => ['1', '4', '8', ...etc ] => useful for mapping favorites cards below

  //uncontrolled form, only one render is when submit !
  return(
    <div className="container pt-5 form-background">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="First Name" name="firstName" />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Family Name" name="familyName" />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label" htmlFor='location'>French resident</label>
          <input className="form-check-input" id="location" name="location" type="checkbox" placeholder="Live in France ?" />
        </div>
        <button className="btn btn-primary" type="submit">
          {Object.keys(profile).length > 0 ? "Update Account" : "Create Account"}
        </button>
      </form>


      <br />
      {Object.keys(profile).length > 0 ?
      <div className="my-infos">
        <strong>My first name</strong>
          <p>{profile.firstName}</p>
        <strong>My family name </strong>
          <p>{profile.familyName}</p>
        <strong> I live in France </strong>
          <p>{profile.isLiveInFrance ? "Yes" : "No"}</p>
      </div>
      : ""}


      <div className="mt-4">
        My favorite tv shows
        <br />
        <div className="mini-cards-wrapper">
          {favoriteTvShowsRanks.map(n => {
            return <div key = { n }>
                      <Link to={"/tvshows/" + n}>

                        <div className="mini-card">
                          <p> {getNameFromLocalStorage(n)} </p>
                          <img src={JSON.parse(localStorage.getItem(n)).image} alt="imag"/>
                          <button className="delete-button" onClick={() => handleDeleteFav(n)}>x</button>
                        </div>
                      </Link>

                    </div>
          })}
        </div>


      </div>
    </div>
  )
}

export default Form
