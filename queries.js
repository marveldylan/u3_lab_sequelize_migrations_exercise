const { Business, Location } = require('./models')
const { Op } = require('sequelize')
function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const findAllBusinesses = async () => {
  const businesses = await Business.findAll()
  stringify(businesses)
}

const findAllLocations = async () => {
  const locations = await Location.findAll({
    where: {
      [Op.and]: [
        { population: { [Op.gte]: 30000 } },
        { population: { [Op.lte]: 100000 } }
      ]
    }
  })
  stringify(locations)
}

const findAllBusinessPhones = async () => {
  const phoneNums = await Business.findAll({ attributes: ['phone_number'] })
  stringify(phoneNums)
}

const getAllNames = async () => {
  const bNamesWRatings = await Business.findAll({
    attributes: ['name', 'rating']
  })
  stringify(bNamesWRatings)
}

const getAllBRatings = async () => {
  const bNamesWRatings = await Business.findAll({
    attributes: ['name', 'rating'],
    where: {
      rating: {
        [Op.lt]: 32
      }
    }
  })
  stringify(bNamesWRatings)
}

async function run() {
  try {
    await findAllBusinesses()
    await findAllLocations()
    await findAllBusinessPhones()
    await getAllNames()
    await getAllBRatings()
  } catch (error) {
    console.log(error)
  } finally {
    process.exit()
  }
}

run()
