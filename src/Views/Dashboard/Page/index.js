import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import Page from './Page';

const windowWidth = window.screen.width;

export function handleMenu(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return setMenuCollapsed(!menuCollapsed);
}

export default compose(
  withState(
    'menuCollapsed',
    'setMenuCollapsed',
    windowWidth < 480,
  ),
  withHandlers({
    handleMenu: (props) => () => handleMenu(props),
  }),
)(Page);
