import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Recordingbar = ({ Value }) => {
	return (
		<div>
			<ProgressBar completed={Value} customLabel='ㅤ' />
		</div>
	);
};

export default Recordingbar;
