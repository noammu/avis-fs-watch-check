import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header 2',
    Board: () => <Header />,
    isSnippet: true,
});
