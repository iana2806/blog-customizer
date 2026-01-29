import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isParamsOpen, setIsParamsOpen] = useState(false);
	const [articleSettings, setArticleSettings] = useState(defaultArticleState);
	const [draftSettings, setDraftSettings] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleSettings.fontFamilyOption.value,
					'--font-size': articleSettings.fontSizeOption.value,
					'--font-color': articleSettings.fontColor.value,
					'--container-width': articleSettings.contentWidth.value,
					'--bg-color': articleSettings.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isParamsOpen}
				onToggle={() => setIsParamsOpen((prev) => !prev)}
				draft={draftSettings}
				onChangeDraft={setDraftSettings}
				onApply={() => setArticleSettings(draftSettings)}
				onReset={() => {
					setDraftSettings(defaultArticleState);
					setArticleSettings(defaultArticleState);
				}}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
