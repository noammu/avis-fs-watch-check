import classNames from 'classnames';
import styles from './lkjlkj.module.scss';

export interface LkjlkjProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Lkjlkj = ({ className }: LkjlkjProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ol>
            Lkjlkj
        </div>
    );
};
