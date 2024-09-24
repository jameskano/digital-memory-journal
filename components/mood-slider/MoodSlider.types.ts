export type MoodSliderType = {
	words: string[];
	maxPoints?: number;
	onChange: (value: number, id: string) => void;
	id: string;
};
