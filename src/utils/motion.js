export const textVariant = (delay) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				delay: delay,
				duration: 1.25,
			},
		},
	};
};

export const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const staggerContainer = (staggerChildren, delayChildren) => {
	return {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};

export const codeSnippet = () => {
	return {
		hidden: {
			opacity: 1,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.03,
			},
		},
	};
};

export const letter = () => {
	return {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};
};

export const run = () => {
	return {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: [0, 1, 0],
			rotate: [0, 360, 720],
			transition: {
				delay: 4,
				duration: 2,
                ease: "linear",
			},
		},
	};
};

export const output = () => {
	return {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 5.8,
			},
		},
	};
};
