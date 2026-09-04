import { calls, contacts, currentUser, messages, stories } from '../data/mockData'

const wait = (value) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(value), 120)
  })

export const chatApi = {
  getSession() {
    return wait(currentUser)
  },
  getChats() {
    return wait(contacts)
  },
  getMessages() {
    return wait(messages)
  },
  getStories() {
    return wait(stories)
  },
  getCalls() {
    return wait(calls)
  },
}
