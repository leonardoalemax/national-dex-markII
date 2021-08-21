import { render } from '@testing-library/react';

import Header from '../../../app/components/Header';

test('renders element properly', () => {
	const { container } = render(<Header />);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM bnyziN"
		  >
		    <div
		      class="sc-hKFxyN bQaenu"
		    >
		      <div
		        class="sc-eCApnc sc-jSFjdj hlkZGM jmYtss"
		      />
		      <div
		        class="sc-eCApnc sc-jSFjdj hlkZGM jmYtss"
		      />
		      <div
		        class="sc-eCApnc sc-jSFjdj hlkZGM jmYtss"
		      />
		    </div>
		    <img
		      alt="pokedex"
		      src="logo.png"
		    />
		  </div>
		</div>
	`);
});
