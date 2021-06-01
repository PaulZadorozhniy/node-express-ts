import { Router } from 'express'
import axios from 'axios'

import { getRepository } from './dbConnection'
import { User } from './entity/User'
import { JobDetails } from './entity/JobDetails'
import { Job } from './entity/Job'

const routes = Router()

routes.post('/register', async (req, res) => {
  const user = new User()
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.email = req.body.email
  user.password = req.body.password

  let userRepository = await getRepository(User)

  const savedUser = await userRepository.save(user)

  return res.json(savedUser)
})

routes.post('/login', async (req, res) => {
  let userRepository = await getRepository(User)

  const user = await userRepository.findOne({
    email: req.body.email,
    password: req.body.password,
  })

  console.log(user)

  if (!user) {
    res.status(400).send('Wrong credentials')
  }

  return res.json(user)
})

routes.post('/resume/search', async (req, res) => {
  const result = await axios.post(
    'https://employer-api.rabota.ua/resume/search',
    req.body
  )

  // let jobRepository = await getRepository(Job)

  // jobRepository.save(result.data.documents)

  return res.json(result.data.documents)
})

routes.get('/vacancy/search', async (req, res) => {
  const result = await axios.get('https://api.rabota.ua/vacancy/search', {
    params: req.query,
  })

  let jobRepository = await getRepository(Job)

  jobRepository.save(result.data.documents)

  return res.json(result.data)
})

routes.get('/vacancy', async (req, res) => {
  const result = await axios.get('https://api.rabota.ua/vacancy', {
    params: req.query,
  })

  let jobDetailsRepository = await getRepository(JobDetails)

  jobDetailsRepository.save(result.data)

  return res.json(result.data)
})

export default routes
