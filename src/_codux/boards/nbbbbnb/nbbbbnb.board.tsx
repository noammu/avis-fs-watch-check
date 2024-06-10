import { createBoard } from '@wixc3/react-board';
import { Nbbbbnb } from '../../../components/nbbbbnb/nbbbbnb';

export default createBoard({
    name: 'Nbbbbnb',
    Board: () => <Nbbbbnb />,
    isSnippet: true,
});
