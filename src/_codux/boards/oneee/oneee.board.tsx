import { createBoard } from '@wixc3/react-board';
import { Oneee } from '../../../components/oneee/oneee';

export default createBoard({
    name: 'Oneee',
    Board: () => <Oneee />,
    isSnippet: true,
});
