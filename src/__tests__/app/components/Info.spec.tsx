import { render } from '@testing-library/react';

import Info from '../../../app/components/Info';
import Voltorb from '../../fixtures/voltorb.json';

test('renders element properly with no state', () => {
	const { container } = render(<Info />);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM ivojsm"
		  />
		</div>
	`);
});

test('renders element properly with no state', () => {
	const { container } = render(
		<Info selected={{ name: 'Voltorb', url: 'poke-url' }} />
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM ivojsm selected"
		  >
		    <div
		      class="sc-eCApnc cwKgEi"
		    >
		      #
		       - 
		      Voltorb
		    </div>
		    <div
		      class="sc-gtsrHT dCEJzY"
		    >
		      <div
		        class="sc-hKFxyN bokGSv"
		      >
		        <div
		          class="sc-jSFjdj frluGN"
		        >
		          <img
		            alt="pokeview"
		          />
		        </div>
		        <div
		          class="sc-pNWdM jPvjWT"
		        />
		      </div>
		      <div
		        class="sc-dlnjwi jGxdcE"
		      >
		        <div
		          class="sc-gKAaRy eRcPzA"
		        />
		        <div
		          class="sc-iCoGMd hutXq"
		        />
		      </div>
		    </div>
		  </div>
		</div>
	`);
});

test('renders element properly with all state without flavor text', () => {
	const { container } = render(
		<Info
			selected={{
				...(Voltorb as any),
				species: {
					flavor_text_entries: [
						{
							flavor_text: '',
							language: { name: 'en' },
						},
					],
				},
			}}
		/>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM ivojsm selected"
		  >
		    <div
		      class="sc-eCApnc cwKgEi"
		    >
		      #
		      100
		       - 
		      voltorb
		    </div>
		    <div
		      class="sc-gtsrHT dCEJzY"
		    >
		      <div
		        class="sc-hKFxyN bokGSv"
		      >
		        <div
		          class="sc-jSFjdj frluGN"
		        >
		          <img
		            alt="pokeview"
		            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
		          />
		        </div>
		        <div
		          class="sc-pNWdM jPvjWT"
		        >
		          <span
		            class="sc-dIsUp fjMNcB electric"
		          >
		            electric
		          </span>
		        </div>
		      </div>
		      <div
		        class="sc-dlnjwi jGxdcE"
		      >
		        <div
		          class="sc-gKAaRy eRcPzA"
		        />
		        <div
		          class="sc-iCoGMd hutXq"
		        >
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            hp
		            : 
		            <span>
		              40
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            attack
		            : 
		            <span>
		              30
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            defense
		            : 
		            <span>
		              50
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            special-attack
		            : 
		            <span>
		              55
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            special-defense
		            : 
		            <span>
		              55
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            speed
		            : 
		            <span>
		              100
		            </span>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	`);
});

test('renders element properly with all state', () => {
	const { container } = render(
		<Info
			selected={{
				...(Voltorb as any),
				species: {
					flavor_text_entries: [
						{
							flavor_text: 'Voltorb is the best for test',
							language: { name: 'en' },
						},
					],
				},
			}}
		/>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM ivojsm selected"
		  >
		    <div
		      class="sc-eCApnc cwKgEi"
		    >
		      #
		      100
		       - 
		      voltorb
		    </div>
		    <div
		      class="sc-gtsrHT dCEJzY"
		    >
		      <div
		        class="sc-hKFxyN bokGSv"
		      >
		        <div
		          class="sc-jSFjdj frluGN"
		        >
		          <img
		            alt="pokeview"
		            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
		          />
		        </div>
		        <div
		          class="sc-pNWdM jPvjWT"
		        >
		          <span
		            class="sc-dIsUp fjMNcB electric"
		          >
		            electric
		          </span>
		        </div>
		      </div>
		      <div
		        class="sc-dlnjwi jGxdcE"
		      >
		        <div
		          class="sc-gKAaRy eRcPzA"
		        >
		          Voltorb is the best for test
		        </div>
		        <div
		          class="sc-iCoGMd hutXq"
		        >
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            hp
		            : 
		            <span>
		              40
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            attack
		            : 
		            <span>
		              30
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            defense
		            : 
		            <span>
		              50
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            special-attack
		            : 
		            <span>
		              55
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            special-defense
		            : 
		            <span>
		              55
		            </span>
		          </div>
		          <div
		            class="sc-fujyAs dVXZnr"
		          >
		            speed
		            : 
		            <span>
		              100
		            </span>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	`);
});
