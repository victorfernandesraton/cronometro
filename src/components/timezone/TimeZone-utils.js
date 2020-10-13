export const extractCity = (val) => {
	try {
		let divide = val.split("/")
		return `${divide?.[1].replace("_", " ")}${
			divide?.[2] ? ` ${divide?.[2].replace("_", " ")}` : ""
		}`
	} catch (error) {
		console.error(error)
		throw new Error("Value is not valid")
	}
}

export const generateZones = (el) => {
	return { city: extractCity(el), timezone: el }
}

export const parseHours = (el = new Date(Date.now())) => {
	return {
		hour: el.getHours(),
		min: el.getMinutes(),
		sec: el.getSeconds(),
	}
}
