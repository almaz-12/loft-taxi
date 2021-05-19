import authReducer from './authReducer'
import {logIn, logOut, logInError} from '../actions'

describe("authReducer", () => {
  describe("#LOG_IN", () => {
    it('успешно авторизовался', () => {
      expect(authReducer({isLoggedIn: false, token: null, error: null}, logIn('token'))).toEqual({isLoggedIn: true, token: 'token', error: null})
    })
  })

  describe("#LOG_OUT", () => {
    it('успешно разлогинился', () => {
      expect(authReducer({isLoggedIn: true, token: 'token', error: null}, logOut())).toEqual({isLoggedIn: false, token: null, error: null})
    })
  })

  describe("#LOG_IN_ERROR", () => {
    it('ошибка при неправильной авторизации', () => {
      expect(authReducer({isLoggedIn: true, token: 'token', error: null}, logInError('error'))).toEqual({isLoggedIn: false, token: null, error: 'error'})
    })
  })
})