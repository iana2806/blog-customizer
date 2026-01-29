import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	isOpen: boolean;
	onToggle: () => void;
	draft: ArticleStateType;
	onChangeDraft: (value: ArticleStateType) => void;
	onApply: () => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	isOpen,
	onToggle,
	draft,
	onChangeDraft,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onToggle} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>

					<div className={styles.spacing}></div>

					<Select
						title='шрифт'
						options={fontFamilyOptions}
						selected={draft.fontFamilyOption}
						onChange={(option) =>
							onChangeDraft({ ...draft, fontFamilyOption: option })
						}
					/>

					<div className={styles.spacing}></div>

					<RadioGroup
						name='font-size'
						title='рАЗМЕР шрифта'
						options={fontSizeOptions}
						selected={draft.fontSizeOption}
						onChange={(option) =>
							onChangeDraft({ ...draft, fontSizeOption: option })
						}
					/>

					<div className={styles.spacing}></div>

					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={draft.fontColor}
						onChange={(option) =>
							onChangeDraft({ ...draft, fontColor: option })
						}
					/>

					<div className={styles.spacing}></div>

					<Separator />

					<div className={styles.spacing}></div>

					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={draft.backgroundColor}
						onChange={(option) =>
							onChangeDraft({ ...draft, backgroundColor: option })
						}
					/>

					<div className={styles.spacing}></div>

					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={draft.contentWidth}
						onChange={(option) =>
							onChangeDraft({ ...draft, contentWidth: option })
						}
					/>

					<div className={styles.spacingLarge}></div>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='clear'
							htmlType='button'
							onClick={onReset}
						/>
						<Button
							title='Применить'
							type='apply'
							htmlType='button'
							onClick={onApply}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
