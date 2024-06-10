import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'Header',
    Board: () => (
        <ComponentWrapper>
            <Header />
        </ComponentWrapper>
    ),
    isSnippet: true,
});
