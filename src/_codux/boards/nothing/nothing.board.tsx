import { createBoard } from '@wixc3/react-board';
import { Nothing } from '../../../components/nothing/nothing';

export default createBoard({
    name: 'Nothing',
    Board: () => <Nothing />,
    isSnippet: true,
});
