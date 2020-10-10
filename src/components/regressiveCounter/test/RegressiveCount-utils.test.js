import {decrementTime} from "../RegressiveCount-utiils"

describe("decrementTime", () => {
	test("expected value", () => {
		expect(decrementTime({hour: 2})).toEqual({
			hour: 1,
			min: 59,
			sec: 59,
		})
	})
	test("expected value pass one minute", () => {
		let val = {hour: 2}
		for (let i = 60; i > 0; i--) {
			val = decrementTime({...val})
		}
		expect(val).toEqual({
			hour: 1,
			min: 59,
			sec: 0,
		})
	})
	test("expected value pass two minutes", () => {
		let val = {hour: 2}
		for (let i = 120; i > 0; i--) {
			val = decrementTime({...val})
		}
		expect(val).toEqual({
			hour: 1,
			min: 58,
			sec: 0,
		})
	})
	test("expected value pass one hour", () => {
		let val = {hour: 2}
		for (let i = 3600; i > 0; i--) {
			val = decrementTime({...val})
		}
		expect(val).toEqual({
			hour: 1,
			min: 0,
			sec: 0,
		})
	})

	test("expected value pass thow hour", () => {
		let val = {hour: 2}
		for (let i = 7200; i > 0; i--) {
			val = decrementTime({...val})
		}
		expect(val).toEqual({
			hour: 0,
			min: 0,
			sec: 0,
		})
	})
	test("break if negative possibility", () => {
		let val = {sec: 10}
		for (let i = 30; i > 0; i--) {
			val = decrementTime({...val})
		}
		expect(val).toEqual({
			hour: 0,
			min: 0,
			sec: 0,
		})
	})
})