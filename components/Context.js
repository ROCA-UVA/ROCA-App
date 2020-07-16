import React, { createContext, useContext, useReducer, useState, useEffect} from 'react';

export const FeedbackContext = createContext()
export const useFeedbackContext = () => useContext(FeedbackContext)

export function FeedbackProvider(props) {
	const [activity, setActivity] = useState(props.value.activity)
	const [event, setEvent] = useState(props.value.event)
	const [log, setLog] = useState("")

	useEffect(() => {
		setLog(log + "\n" + event)
	}, [event])

	return (
		<FeedbackContext.Provider 
			value={{
				activity,
				event,
				log,
				setActivity,
				setEvent,
				setLog
			}}
		>
			{props.children}
		</FeedbackContext.Provider>
	)
}
