import classNames from 'classnames';
import styles from './vcnnbc.module.scss';

export interface VcnnbcProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Vcnnbc = ({ className }: VcnnbcProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Vcnnbc
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <input />
            <input type="radio" />
            <input type="checkbox" />
            <input type="password" />
            <data />
        </div>
    );
};
