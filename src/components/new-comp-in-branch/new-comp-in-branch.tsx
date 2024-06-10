import classNames from 'classnames';
import styles from './new-comp-in-branch.module.scss';

export interface NewCompInBranchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewCompInBranch = ({ className }: NewCompInBranchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>text</span>
            </div>
            <div>NewCompInBranchsdfsdfsd fsd fsdf sdf</div>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
        </div>
    );
};
