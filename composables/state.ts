import { useState } from "#app";

const state = {
	projects: []
}

export const useNavActive = () => useState('active', () => {
	return { active: false }
})

export const useToggleActive = () => useState('toggle', () => {
	useNavActive().value.active = !useNavActive().value.active
})

export const useProjects = () => useState('projects', () => {
	console.log(state);

	return state.projects
})

export const setProjects = (data) => useState('projects', () => {
	console.log(data);

	state.projects = data
})