import classNames from 'classnames';
import styles from './fghdfg.module.scss';

export interface FghdfgProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Fghdfg = ({ className }: FghdfgProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <input />
            Fghdfg
            <p>This is a paragraph.</p>
        </div>
    );
};
