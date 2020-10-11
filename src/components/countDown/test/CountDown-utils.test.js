import { decrementTime, setDateWithTime } from "../CountDown-utils"

describe("dateUtils", () => {
	test("blank", () => {
		const val = setDateWithTime()
		expect(val.getHours()).toEqual(0)
		expect(val.getMinutes()).toEqual(0)
		expect(val.getSeconds()).toEqual(0)
	})
	test("expected", () => {
		const val = setDateWithTime({min: 2, hour: 1, sec: 3})
		expect(val.getHours()).toEqual(1)
		expect(val.getMinutes()).toEqual(2)
		expect(val.getSeconds()).toEqual(3)
	})
	test("using default", () => {
		const val = setDateWithTime({min: 2})
		expect(val.getHours()).toEqual(0)
		expect(val.getMinutes()).toEqual(2)
		expect(val.getSeconds()).toEqual(0)
	})
})

describe("decrementTime", () => {
	test("expected value", () => {
		expect(decrementTime({ hour: 2 })).toEqual({
			hour: 1,
			min: 59,
			sec: 59,
		})
	})
	test("expected value pass one minute", () => {
		let val = { hour: 2 }
		for (let i = 60; i > 0; i--) {
			val = decrementTime({ ...val })
		}
		expect(val).toEqual({
			hour: 1,
			min: 59,
			sec: 0,
		})
	})
	test("expected value pass two minutes", () => {
		let val = { hour: 2 }
		for (let i = 120; i > 0; i--) {
			val = decrementTime({ ...val })
		}
		expect(val).toEqual({
			hour: 1,
			min: 58,
			sec: 0,
		})
	})
	test("expected value pass one hour", () => {
		let val = { hour: 2 }
		for (let i = 3600; i > 0; i--) {
			val = decrementTime({ ...val })
		}
		expect(val).toEqual({
			hour: 1,
			min: 0,
			sec: 0,
		})
	})

	test("expected value pass thow hour", () => {
		let val = { hour: 2 }
		for (let i = 7200; i > 0; i--) {
			val = decrementTime({ ...val })
		}
		expect(val).toEqual({
			hour: 0,
			min: 0,
			sec: 0,
		})
	})
	test("break if negative possibility", () => {
		let val = { sec: 10 }
		for (let i = 30; i > 0; i--) {
			val = decrementTime({ ...val })
		}
		expect(val).toEqual({
			hour: 0,
			min: 0,
			sec: 0,
		})
	})
})
