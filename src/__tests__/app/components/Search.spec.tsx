import { render, screen, fireEvent } from '@testing-library/react';

import Search from '../../../app/components/Search';

test('renders element properly', () => {
	const setText = jest.fn();
	const reset = jest.fn();

	const { container } = render(
		<Search text="itest" setText={setText} reset={reset} />
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-dlnjwi iNLWvV"
		  >
		    <input
		      class="sc-gtsrHT iWKPcs"
		      type="text"
		      value="itest"
		    />
		    <button
		      class="sc-bdnxRM fxCFro"
		    >
		      <img
		        alt="go"
		        src="bolt.svg"
		      />
		    </button>
		  </div>
		</div>
	`);

	expect(screen.getByRole('button')).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button'));
	expect(reset).toHaveBeenCalled();

	expect(screen.getByRole('textbox')).toBeInTheDocument();
	fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
	expect(setText).toHaveBeenCalledWith('test');
});
