let types = {
	Number: Number,
	String: String,
	Boolean: Boolean,
	Buffer: Buffer,
	Date: Date,
	Map: Map,
	null: null,
	Object: Object,
	Array: [],
}

function typeOf(value) {
	return Object.prototype.toString.call(value).split(' ')[1].slice(0, -1).toLowerCase();
}

function castString(str) {
	return types[str[0].toUpperCase() + str.slice(1)]
}

const checkObjects = (obj) => {
	let schema = {}
	try {
	    Object.keys(obj).forEach(key => {
			schema[key] = castString(typeOf(obj[key]))
			if (typeOf(obj[key]) == 'array') {
				schema = []
				let arrayValid = castString(typeOf(obj[key][0]));
				if (arrayValid === Object) {
					arrayObjectSchema = checkObjects(obj[key][0]);
					schema.push(arrayObjectSchema);
				}

	    	}
	    })
	} catch (e) {
		return null
	}

    return schema
}

function objectToSchema(obj, undefinedTypeFunction=String) {
	let schema = {};
	for (data in obj) {
		if(typeOf(obj[data]) == 'object') {
			if(checkObjects(obj[data]) != null) {
				schema[data] = checkObjects(obj[data])
			} else {
				delete schema[data]
			}
		} else {

			schema[data] = castString(typeOf(obj[data]))
			if (schema[data] === undefined) {
				schema[data] = {
					type: undefinedTypeFunction,
					required: false
				}
			}
		}
	};

	return schema
}

module.exports = objectToSchema;