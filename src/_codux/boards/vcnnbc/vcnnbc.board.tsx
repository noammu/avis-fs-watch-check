import { createBoard } from '@wixc3/react-board';
import { Vcnnbc } from '../../../components/vcnnbc/vcnnbc';

export default createBoard({
    name: 'Vcnnbc',
    Board: () => <Vcnnbc />,
    isSnippet: true,
});
