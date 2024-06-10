import { createBoard } from '@wixc3/react-board';
import { Lkjlkj } from '../../../components/lkjlkj/lkjlkj';

export default createBoard({
    name: 'Lkjlkj',
    Board: () => <Lkjlkj />,
    isSnippet: true,
});
