import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedTodos: []
		},
		mutations: {
			setTodos(state, todos) {
				state.loadedTodos = todos
			},
			addTodo(state, todo) {
				state.loadedTodos.push(todo)
			},
			editTodo(state, editedTodo) {
				const todoIndex = state.loadedTodos.findIndex((todo) => todo.id === editedTodo.id)
				state.loadedTodos[todoIndex] = editedTodo
			},

			deleteTodo(state, deletedTodo) {
				state.loadedTodos = state.loadedTodos.filter((todo) => todo.id !== deletedTodo.id)
			}
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return axios
					.get('https://jsonplaceholder.typicode.com/todos')
					.then((res) => {
						const todosArray = []
						for (const key in res.data) {
							todosArray.push({ ...res.data[key], id: key })
						}
						vuexContext.commit('setTodos', todosArray)
					})
					.catch((e) => context.error(e))
			},

			addPost(vuexContext, todo) {
				const createdTodo = {
					...todo,
					updatedDate: new Date()
				}
				return axios
					.post('https://jsonplaceholder.typicode.com/todos/', createdTodo)
					.then((result) => {
						vuexContext.commit('addTodo', { ...createdTodo, id: JSON.stringify(result.data.id - 1) }),
							this.$router.push('/')
					})
					.catch((e) => console.log(e))
			},
			editTodo(vuexContext, editedTodo) {
				return axios
					.put(`https://jsonplaceholder.typicode.com/todos/${editedTodo.id - -1}`, editedTodo)
					.then((res) => {
						vuexContext.commit('editTodo', editedTodo), this.$router.push('/')
					})
					.catch((e) => console.log(e))
			},
			deleteTodo(vuexContext, deletedTodo) {
				return axios
					.delete(`https://jsonplaceholder.typicode.com/todos/${deletedTodo.id - -1}`, deletedTodo)
					.then((res) => {
						vuexContext.commit('deleteTodo', deletedTodo), this.$router.push('/')
					})
					.catch((e) => console.log(e))
			},
			setTodos(vuexContext, todos) {
				vuexContext.commit('setTodos', todos)
			}
		},
		getters: {
			loadedTodos(state) {
				return state.loadedTodos
			}
		}
	})
}

export default createStore
