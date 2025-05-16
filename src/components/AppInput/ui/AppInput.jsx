import { forwardRef } from 'react';

const AppInput = forwardRef((props, ref) => {
	const { type = 'text', value, className = '', children, ...rest } = props;

	return (
		<div className={`app-input-wrapper ${className}`}>
			{children}
			<input ref={ref} type={type} {...rest} value={value} />
		</div>
	);
});

export default AppInput;
