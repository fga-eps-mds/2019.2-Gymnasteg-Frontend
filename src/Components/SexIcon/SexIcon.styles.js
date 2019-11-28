import styled from 'styled-components';

import SexIconComponent from './SexIcon';

export default styled(SexIconComponent)`
  color: ${(props) =>
    (props.sex === 'M' ? '#4834d4' : 'rgba(172, 0, 224, 0.65)')};
`;
