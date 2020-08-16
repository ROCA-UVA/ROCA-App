import React, { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {
	const [status, setStatus] = useState(false)
	const [activity, setActivity] = useState(props.value.activity)
	const [event, setEvent] = useState("")
	const [sections, setSections] = useState([])
	const [log, setLog] = useState("")

	useEffect(() => {
		setLog(log + "\n" + event)
	}, [event])

	return (
		<AppContext.Provider 
			value={{
				status,
				setStatus,
				activity,
				setActivity,
				event,
				setEvent,
				sections,
				setSections,
				log,
				setLog
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}
