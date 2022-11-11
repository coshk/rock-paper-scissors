import {render, fireEvent} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import Choice from './Choice';
import ChoiceStore from './ChoiceStore';

describe('Choice: ', () => {
  test('rock, paper, scissors labels rendered', () => {
    render(<Choice />);
    const rock = screen.getByLabelText('🪨');
    const paper = screen.getByLabelText('📜');
    const scissors = screen.getByLabelText('✂️');
    expect(rock).toBeInTheDocument();
    expect(paper).toBeInTheDocument();
    expect(scissors).toBeInTheDocument();
  });

  test('rock, paper, scissors radio btns rendered', () => {
    render(<Choice />);
    const rock = screen.getByTestId('🪨');
    const paper = screen.getByTestId('📜');
    const scissors = screen.getByTestId('✂️');
    expect(rock).toBeInTheDocument();
    expect(paper).toBeInTheDocument();
    expect(scissors).toBeInTheDocument();
  });

  test('radio btns are clickable', () => {
    render(<Choice />);
    const radioBtn = screen.getByLabelText('📜') as HTMLInputElement;

    fireEvent.change(radioBtn, {target: {value: '📜'}});
    expect(radioBtn.value).toBe('📜');
  });

  test('arrow shows when tool.length is 0', () => {
    render(<Choice />);
    const store = ChoiceStore;
    const toolLength = store.tool.length
    const arrow = screen.getByTestId('arrow');

    expect(toolLength).toEqual(0);
    expect(arrow).toBeInTheDocument();
  });

  test('arrow doesnt show when radio checked', async () => {
    render(<Choice />);
    const arrow = screen.getByTestId('arrow');
    const radioBtn = screen.getByLabelText('📜') as HTMLInputElement;

    userEvent.click(radioBtn);
    expect(radioBtn.value).toBe('📜');
    expect(arrow).not.toBeInTheDocument()
  });
})
