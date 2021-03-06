import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterContainer from '../footer/footer_container';



const CategoriesShow = ({ fetchCategory, category, match, fetchPets, pets, users, fetchUsers }) => {

    useEffect(() => {
        fetchUsers()
        fetchPets()
        fetchCategory(match.params.categoryId)
    }, [])

    const catPets = Object.values(pets).filter(pet => pet.category === category.title)

    return category ? (
        <div>
            <h1 className="category-page-header">Category: {category.title}</h1>
            <div className="userPetindex-Pos">
                {
                    catPets.map((pet, i) => 
                        <div className="userPet" key={i}>
                        <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                        <ul className="pet-ele-list" >Name: {pet.name}</ul>
                        <ul className="pet-ele-list" >Category: {pet.category}</ul>
                        <ul className="pet-ele-list" >Color: {pet.color}</ul>
                        <ul className="pet-ele-list" >Size: {pet.size}</ul>
                        <div className="owner-row">
                            <ul className="pet-ele-list" >Owner: </ul>
                            <Link className="link" to={`/users/${pet.owner_id}`}>{users[pet.owner_id].username}</Link>
                        </div>
                    </div>
                        )
                }
            </div>
            <FooterContainer />
        </div>
    ) : null
}

export default CategoriesShow