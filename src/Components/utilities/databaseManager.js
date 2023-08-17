import React from 'react'

const addToCartDatabase = (id, count) => {
    const currentCart = getDatabaseCart();
    currentCart[id] = count
    localStorage.setItem(getDataKey(),)
}

const databaseManager = () => {
    return (
        <div>


        </div>
    )
}

export default databaseManager
