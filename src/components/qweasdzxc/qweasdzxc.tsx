import classNames from 'classnames';
import styles from './qweasdzxc.module.scss';

export interface QweasdzxcProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Qweasdzxc = ({ className }: QweasdzxcProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            <a href="/">Link</a>
            <div>
                <span>text</span>
            </div>
            Qweasdzxc
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <video
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
            />
            <audio
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
            />
        </div>
    );
};
