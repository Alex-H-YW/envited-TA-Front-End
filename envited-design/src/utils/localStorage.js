
/**
 * @description
 * Gets the value at the specified key.
 */
export function getItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

/**
 * @description
 * set the value at the specified key.
 */
export function setItem(key, value) {
	return localStorage.setItem(key, JSON.stringify(value));
}
/**
 * @description
 * update the value at the specified key.
 */
export function updateItem(key, updatedData) {
    const value = {
        ...JSON.parse(localStorage.getItem(key)),
        ...updatedData
    };
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description
 * remove the value at the specified key.
 */

 export function removeItem(key) {
	return localStorage.remove(key);
}