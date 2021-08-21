import { render } from '@testing-library/react';

import App from '../../app/';

test('renders element properly', () => {
	const { container } = render(<App />);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM WxyXX"
		  >
		    <div
		      class="sc-kEqXSa jATyVb"
		    >
		      <div
		        class="sc-gtsrHT FYnNa"
		      >
		        <div
		          class="sc-dlnjwi sc-hKFxyN vhKBc hVzGsZ"
		        />
		        <div
		          class="sc-dlnjwi sc-hKFxyN vhKBc hVzGsZ"
		        />
		        <div
		          class="sc-dlnjwi sc-hKFxyN vhKBc hVzGsZ"
		        />
		      </div>
		      <img
		        alt="pokedex"
		        src="logo.png"
		      />
		    </div>
		    <div
		      class="sc-bqGGPW liFjVz"
		    >
		      <input
		        class="sc-dIsUp kkapvl"
		        type="text"
		        value=""
		      />
		      <button
		        class="sc-crzoAE jAhqtH"
		      >
		        <img
		          alt="go"
		          src="bolt.svg"
		        />
		      </button>
		    </div>
		    <div
		      class="sc-gKAaRy dPWzAX"
		    />
		    <div
		      class="sc-jSFjdj HvoST"
		    />
		    <div
		      class="sc-ksluID cgDwLi"
		    />
		  </div>
		</div>
	`);
});
