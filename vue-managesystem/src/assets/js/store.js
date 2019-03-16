const EVENT_KEY = 'EVENT_KEY'
const Store = {
	save(events,key=EVENT_KEY){
		localStorage.setItem(key,JSON.stringify(events));
	},
	get(key=EVENT_KEY){
		return JSON.parse(localStorage.getItem(key)|| '[]');
	}
}

export {Store} 
