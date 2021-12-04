import { KneelDiamonds } from "./KneelDiamonds.js"
import { Metals } from "./Metals.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()


// const database = {
//     orderBuilder: {},
// }

// export const setMetal = (id) => {
//     database.orderBuilder.metalId = id
// }

// export const setSize = (id) => {
//     database.orderBuilder.sizeId = id
// }

// export const setStyle = (id) => {
//     database.orderBuilder.styleId = id
// }


// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = { ...database.orderBuilder }

//     // Add a new primary key to the object
//     const lastIndex = database.customOrders.length - 1
//     newOrder.id = database.customOrders[lastIndex].id + 1

//     // Add a timestamp to the order
//     newOrder.timestamp = Date.now()

//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)

//     // Reset the temporary state for user choices
//     database.orderBuilder = {}

//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// document.dispatchEvent(new CustomEvent("stateChanged"))

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
