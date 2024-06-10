import classNames from 'classnames';
import styles from './oiuoui.module.scss';
import { Qweasdzxc } from '../qweasdzxc/qweasdzxc';

export interface OiuouiProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Oiuoui = ({ className }: OiuouiProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Oiuoui
            <div className={styles.grid}>
                <h2>Replace content</h2>
            </div>
            <div className={styles.grid1}>
                <h2>Replace content</h2>
            </div>
            <Qweasdzxc />
        </div>
    );
};
