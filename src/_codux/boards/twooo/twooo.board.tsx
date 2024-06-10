import { createBoard } from '@wixc3/react-board';
import { Twooo } from '../../../components/twooo/twooo';

export default createBoard({
    name: 'Twooo',
    Board: () => <Twooo />,
    isSnippet: true,
});
