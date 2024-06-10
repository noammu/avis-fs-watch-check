import { createBoard } from '@wixc3/react-board';
import { NewCompInBranch } from '../../../components/new-comp-in-branch/new-comp-in-branch';

export default createBoard({
    name: 'NewCompInBranch',
    Board: () => <NewCompInBranch />,
    isSnippet: true,
});
