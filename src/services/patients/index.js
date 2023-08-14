import { serviceMaker, methods } from '../index'

// portfolios api
export const GET_PORTFOLIOS = () => serviceMaker('/users', methods.GET)
export const CREATE_PORTFOLIO = (paylod) => serviceMaker('/Portfolio', methods.POST, paylod)
export const UPDATE_PORTFOLIO = (paylod) => serviceMaker('/Portfolio', methods.PUT, paylod)
export const GET_PORTFOLIO = (id) => serviceMaker(`/Portfolio/${id}`, methods.GET)