function getCurrentWeekNumber(): number {
	const today: Date = new Date();
	const startOfWeek: Date = new Date(today.getFullYear(), 0, 1);
	const weekNumber: number = Math.ceil(
		((today.getTime() - startOfWeek.getTime()) / 86400000 +
			startOfWeek.getDay() +
			1) /
			7,
	);

	return weekNumber;
}

export default getCurrentWeekNumber;
