import { createBoard } from '@wixc3/react-board';
import { TwooOnee } from '../../../components/twoo-onee/twoo-onee';
import TwooOnee1_board_module from './twoo-onee-1.board.module.scss';

export default createBoard({
    name: 'TwooOnee 1',
    Board: () => (
        <TwooOnee>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={TwooOnee1_board_module.asdd}
            />
        </TwooOnee>
    ),
    isSnippet: true,
});
