import { createBoard } from '@wixc3/react-board';
import { Fghdfg } from '../../../components/fghdfg/fghdfg';

export default createBoard({
    name: 'Fghdfg',
    Board: () => <Fghdfg />,
    isSnippet: true,
});
