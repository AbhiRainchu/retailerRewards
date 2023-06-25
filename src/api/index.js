import data from './mock.json';

const getCustomers = async () => {
    const customers = data.map(e => {
        return {
            customerName: e.customerName,
            customerId: e.customerId
        }
    })
    return customers;
}

const calculateRewardPoints = (amount) => {
    let points = 0;
    if(amount > 100){
        points += (amount - 100) * 2
    }
    if(amount > 50){
        points += (amount > 100) ? 50 : (amount - 50)
    }

    return points;
}

const getCustomerRewards = async (customerId) => {
    const customer = await data.find(e => {
        return e.customerId === customerId
    })
    const rewards = {
        'april': customer.transactions.filter(e => e.month === 'april').map(e => calculateRewardPoints(e.amount)).reduce((e,t) => e+t, 0),
        'may': customer.transactions.filter(e => e.month === 'may').map(e => calculateRewardPoints(e.amount)).reduce((e,t) => e+t, 0),
        'june': customer.transactions.filter(e => e.month === 'june').map(e => calculateRewardPoints(e.amount)).reduce((e,t) => e+t, 0)
    }

    return rewards;
}

export default {
    getCustomers,
    getCustomerRewards
}