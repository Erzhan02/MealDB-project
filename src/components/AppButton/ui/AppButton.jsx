const AppButton = ({
	type = 'button',
	className = '',
	children,
	onClick,
	disabled,
	...rest
}) => {
	return (
		<button
			type={type}
			className={`app-button ${className} ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};

export default AppButton;
