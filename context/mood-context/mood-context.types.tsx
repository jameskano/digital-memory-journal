export type MoodContextType = {
	id: string;
	user: string;
	daate: string;
	mood: number;
	entries: MoodEntriesType[];
};

export type MoodEntriesType = {
	id: string;
	mood: number;
	time: string;
	defaultEmotions: [
		{
			id: 1;
			value: number;
		},
		{
			id: 2;
			value: number;
		},
		{
			id: 3;
			value: number;
		},
		{
			id: 4;
			value: number;
		},
		{
			id: 5;
			value: number;
		},
		{
			id: 6;
			value: number;
		},
		{
			id: 7;
			value: number;
		},
	];
};
