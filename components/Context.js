import React, { createContext, useContext, useState} from 'react';

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {
	const [activity, setActivity] = useState(props.value.activity)
	const [event, setEvent] = useState(props.value.event)
	const [sections, setSections] = useState([])

	return (
		<AppContext.Provider 
			value={{
				activity,
				setActivity,
				event,
				setEvent,
				sections,
				setSections
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}
