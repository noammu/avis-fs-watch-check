import { createBoard } from '@wixc3/react-board';
import { Qweasdzxc } from '../../../components/qweasdzxc/qweasdzxc';

export default createBoard({
    name: 'Qweasdzxc',
    Board: () => <Qweasdzxc />,
    isSnippet: true,
});
