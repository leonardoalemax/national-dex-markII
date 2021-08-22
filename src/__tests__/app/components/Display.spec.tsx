import { render, screen, fireEvent } from '@testing-library/react';

import Display from '../../../app/components/Display';

import Voltorb from '../../fixtures/voltorb.json';

test('renders element properly in default state', () => {
	const { container } = render(
		<Display list={[]} select={jest.fn()} className="" />
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM kBUBdL"
		  />
		</div>
	`);
});

test('renders element properly with fist type list', () => {
	const { container } = render(
		<Display
			list={[
				{
					name: 'test',
					url: 'pokemon/url',
				},
			]}
			select={jest.fn()}
			className="selected"
		/>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM kBUBdL selected"
		  >
		    <div
		      class="sc-gtsrHT cCFGuB"
		    >
		      <div
		        class="sc-dlnjwi kenTwt"
		      >
		        #
		      </div>
		      <img
		        alt="sprit"
		      />
		      <div
		        class="sc-hKFxyN lmoTsb"
		      >
		        test
		      </div>
		    </div>
		  </div>
		</div>
	`);
});

test('renders element properly with more data filled list with no selected', () => {
	const select = jest.fn();

	const { container } = render(
		<Display list={[{ ...(Voltorb as any) }]} select={select} className="" />
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM kBUBdL"
		  >
		    <div
		      class="sc-gtsrHT cCFGuB"
		    >
		      <div
		        class="sc-dlnjwi kenTwt"
		      >
		        #
		        100
		      </div>
		      <img
		        alt="sprit"
		        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
		      />
		      <div
		        class="sc-hKFxyN lmoTsb"
		      >
		        voltorb
		      </div>
		      <div
		        class="sc-eCApnc crGkvA electric"
		      >
		        electric
		      </div>
		    </div>
		  </div>
		</div>
	`);

	expect(screen.getByText('voltorb')).toBeInTheDocument();
	fireEvent.click(screen.getByText('voltorb'));
	expect(select).toHaveBeenCalledWith(Voltorb);
});

test('renders element properly with more data filled list selected', () => {
	const select = jest.fn();

	const { container } = render(
		<Display
			list={[{ ...(Voltorb as any) }]}
			select={select}
			selected={Voltorb as any}
			className=""
		/>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="sc-bdnxRM kBUBdL"
		  >
		    <div
		      class="sc-gtsrHT cCFGuB selected"
		    >
		      <div
		        class="sc-dlnjwi kenTwt"
		      >
		        #
		        100
		      </div>
		      <img
		        alt="sprit"
		        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
		      />
		      <div
		        class="sc-hKFxyN lmoTsb"
		      >
		        voltorb
		      </div>
		      <div
		        class="sc-eCApnc crGkvA electric"
		      >
		        electric
		      </div>
		    </div>
		  </div>
		</div>
	`);

	expect(screen.getByText('voltorb')).toBeInTheDocument();
	fireEvent.click(screen.getByText('voltorb'));
	expect(select).toHaveBeenCalledWith(Voltorb);
});
