import { Router, Request, Response } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'

const routes = Router()

routes.get('/github', (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.
  GITHUB_CLIENT_ID}`)
})

routes.get('/signin/callback', (req: Request, res: Response) => {
  const { code } = req.query

  return res.json(code)
})

routes.post('/authenticate', new AuthenticateUserController().handle)

export default routes