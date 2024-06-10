import { createBoard } from '@wixc3/react-board';
import { Oiuoui } from '../../../components/oiuoui/oiuoui';

export default createBoard({
    name: 'Oiuoui',
    Board: () => <Oiuoui />,
    isSnippet: true,
});
