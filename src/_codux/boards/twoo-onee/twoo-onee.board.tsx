import { createBoard } from '@wixc3/react-board';
import { TwooOnee } from '../../../components/twoo-onee/twoo-onee';

export default createBoard({
    name: 'TwooOnee',
    Board: () => (
        <TwooOnee>
            <h1>Heading 1</h1>
        </TwooOnee>
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#e49e9e',
    },
});
