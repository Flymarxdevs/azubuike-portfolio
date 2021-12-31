import { useState } from "#app";

export const useNavActive = () => useState('active', () => {
	return { active: true }
})

export const useToggleActive = () => useState('toggle', () => {
	useNavActive().value.active = !useNavActive().value.active
})