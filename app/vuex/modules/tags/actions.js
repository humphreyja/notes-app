import shop from '../../api/contacts'
import * as types from '../mutation-types'

export const getAllContacts = ({ dispatch }) => {
  shop.getContacts(contacts => {
    dispatch(types.RECEIVE_CONTACTS, contacts)
  })
}
