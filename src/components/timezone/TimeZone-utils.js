export const extractCity = (val) => {
	try {
		return val.split("/")?.[1].replace("_", " ")
	} catch (error) {
		console.error(error)
		throw new Error("Value is not valid")
	}
}

export const generateZones = (el) => {
	return {city: extractCity(el), timezone: el}
}

export const parseHours = (el=new Date(Date.now())) => {
	return {
		hour: el.getHours(),
		min: el.getMinutes(),
		sec: el.getSeconds()
	}
}