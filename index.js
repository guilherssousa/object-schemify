let types = {
	Number: Number,
	String: String,
	Boolean: Boolean,
	Buffer: Buffer,
	Date: Date,
	Map: Map,
	null: null,
	Object: {},
	Array: [],
}

function castString(str) {
	return types[str[0].toUpperCase() + str.slice(1)]
}

function isArray(obj) {
	return Array.isArray(obj)
}

const checkObjects = (obj) => {
	let schema = isArray(obj) ? [] : {};
	try {
	    Object.keys(obj).forEach(key => {
			schema[key] = castString(typeof obj[key])
			if (typeof obj[key] === 'object') {
				if(!obj[key] === null) {
	    			checkObjects(obj[key])
	    		} else {
	    			delete schema[key]
	    		}
	    	}
	    })
	} catch (e) {
		return null
	}

    return schema
}

function objectToSchema(obj) {
	let schema = {};
	for (data in obj) {
		if(typeof obj[data] == 'object') {
			if(checkObjects(obj[data]) != null) {
				schema[data] = checkObjects(obj[data])
			} else {
				delete schema[data]
			}
		} else {
			schema[data] = castString(typeof obj[data])
		}
	};

	return schema
}

module.exports = objectToSchema;