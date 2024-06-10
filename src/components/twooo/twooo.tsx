import classNames from 'classnames';
import styles from './twooo.module.scss';

export interface TwoooProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Twooo = ({ className }: TwoooProps) => {
    return <div className={classNames(styles.root, className)}>Twooo</div>;
};
