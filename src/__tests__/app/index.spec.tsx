import { render } from '@testing-library/react';

import App from '../../app/';

test('renders element properly', () => {
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
		      class="sc-gKAaRy ddJvxD"
		    />
		    <div
		      class="sc-jSFjdj icWWEv"
		    />
		    <div
		      class="sc-ksluID bzHXHd"
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
		          >
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              speed: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              special-defense: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              special-attack: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              defense: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              attack: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              hp: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              Height: 
		              <span>
		                55
		              </span>
		            </div>
		            <div
		              class="sc-dlMDgC dCcKtw"
		            >
		              Weight: 
		              <span>
		                55
		              </span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	`);
});
