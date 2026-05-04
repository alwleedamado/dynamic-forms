import { render } from '@testing-library/react';

import ReactAdapter from './react-adapter';

describe('ReactAdapter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactAdapter />);
    expect(baseElement).toBeTruthy();
  });
});
