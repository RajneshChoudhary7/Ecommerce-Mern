import {createUserTable} from '../models/userTable.js'
import {createOrderItemTable} from '../models/orderItemsTable.js'
import {createOrdersTable} from '../models/ordersTable.js'
import {createPaymentsTable} from '../models/paymentsTable.js'
import {createProductReviewsTable} from '../models/productReviewsTable.js'
import {createProductTable} from '../models/productTable.js'
import {createShippingInfoTable} from '../models/shippinginfoTable.js'




export const createTables = async () =>{
    try {
        await createUserTable();
        await createProductTable()
        await createProductReviewsTable()
        await createOrdersTable();
        await createOrderItemTable();
        await createPaymentsTable();
        await createShippingInfoTable()
        console.log("All table Created Successfully ")
    } catch (error) {
        console.log("Error creating tables :",error)
    }
}