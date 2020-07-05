import React, { createContext, useContext, useReducer, useState} from 'react';

export const FeedbackContext = createContext()
export const useFeedbackContext = () => useContext(FeedbackContext)

export function FeedbackProvider(props) {
	const [activity, setActivity] = useState(props.value.activity)
	const [event, setEvent] = useState(props.value.event)

	return (
		<FeedbackContext.Provider 
			value={{
				activity,
				event,
				setActivity,
				setEvent,
			}}
		>
			{props.children}
		</FeedbackContext.Provider>
	)
}
