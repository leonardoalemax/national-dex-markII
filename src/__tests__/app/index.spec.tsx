import { render, screen, fireEvent } from '@testing-library/react';

import App from '../../app/';

import usePokeState from '../../hooks/usePokeState';

jest.mock('../../hooks/usePokeState');

test('renders element properly', () => {
	(usePokeState as any).mockImplementation(() => ({
		text: '',
		selected: {},
		list: [],
		setText: jest.fn(),
		select: jest.fn(),
	}));

	const { container } = render(<App />);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM fhpvmG"
		  >
		    <div
		      class="sc-kEqXSa kEzvjY"
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
		      class="sc-gKAaRy ddJvxD selected"
		    />
		    <div
		      class="sc-jSFjdj icWWEv"
		    />
		    <div
		      class="sc-ksluID bzHXHd selected"
		    >
		      <div
		        class="sc-bkbkJK enRLMt"
		      >
		        #
		         - 
		      </div>
		      <div
		        class="sc-hBMUJo lpdjbR"
		      >
		        <div
		          class="sc-fFSPTT kMyCIe"
		        >
		          <div
		            class="sc-iemWCZ fcykSJ"
		          >
		            <img
		              alt="pokeview"
		            />
		          </div>
		          <div
		            class="sc-kfYoZR eCngaU"
		          />
		        </div>
		        <div
		          class="sc-fnVZcZ hnTQuP"
		        >
		          <div
		            class="sc-dIvrsQ bDCxeY"
		          />
		          <div
		            class="sc-hHEiqL gyUTlc"
		          />
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	`);
});

test('renders element properly', () => {
	const setText = jest.fn();
	const select = jest.fn();

	(usePokeState as any).mockImplementation(() => ({
		text: '',
		selected: {},
		list: [],
		setText,
		select,
	}));

	const { container } = render(<App />);

	expect(screen.getByRole('button')).toBeInTheDocument();
	fireEvent.click(screen.getByRole('button'));
	expect(setText).toHaveBeenCalledWith('');
	expect(select).toHaveBeenCalledWith();

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM fhpvmG"
		  >
		    <div
		      class="sc-kEqXSa kEzvjY"
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
		      class="sc-gKAaRy ddJvxD selected"
		    />
		    <div
		      class="sc-jSFjdj icWWEv"
		    />
		    <div
		      class="sc-ksluID bzHXHd selected"
		    >
		      <div
		        class="sc-bkbkJK enRLMt"
		      >
		        #
		         - 
		      </div>
		      <div
		        class="sc-hBMUJo lpdjbR"
		      >
		        <div
		          class="sc-fFSPTT kMyCIe"
		        >
		          <div
		            class="sc-iemWCZ fcykSJ"
		          >
		            <img
		              alt="pokeview"
		            />
		          </div>
		          <div
		            class="sc-kfYoZR eCngaU"
		          />
		        </div>
		        <div
		          class="sc-fnVZcZ hnTQuP"
		        >
		          <div
		            class="sc-dIvrsQ bDCxeY"
		          />
		          <div
		            class="sc-hHEiqL gyUTlc"
		          />
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	`);
});
