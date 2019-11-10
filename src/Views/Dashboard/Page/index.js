import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import Page from './Page';

export function handleMenu(props) {
  const { menuOpened, setMenuOpened } = props;

  return setMenuOpened(!menuOpened);
}

export default compose(
  withState(
    'menuOpened',
    'setMenuOpened',
    false,
  ),
  withHandlers({
    handleMenu: (props) => () => handleMenu(props),
  }),
)(Page);
