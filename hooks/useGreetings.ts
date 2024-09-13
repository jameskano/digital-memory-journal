import { greetingTitles, greetingQuestions } from '@/constants/greetings';
import { useAppContext } from '@/context/app-context/app-context';

export const useGreetings = () => {
	const { name } = useAppContext();

	const greetingRandomSelector = (greetings: string[]) => greetings[Math.floor(Math.random() * 5)];

	const currentTitle = greetingRandomSelector(greetingTitles);
	const currentQuestion = greetingRandomSelector(greetingQuestions);

	const greetingTitle = `${currentTitle}, ${name}${currentTitle === 'What’s up' ? '?' : '!'}`;

	const greetingQuestion = `${currentQuestion}`;

	return { greetingTitle, greetingQuestion };
};
