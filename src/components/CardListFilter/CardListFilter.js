// @flow
import React, { Component, type Element } from 'react';
import type { Car } from '../../types';
import SearchInput from '../SearchInput';

type Props = {
  children: Element<*>,
  cards: Array<Car>,
};

type State = {
  searchTerm: string,
};

class CardListFilter extends Component<Props, State> {
  state = { searchTerm: '' };

  onChange = (e: SyntheticInputEvent<>) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const { children, cards } = this.props;

    const cardListFiltered = cards.filter(card =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <div>
        <SearchInput onChange={this.onChange} />
        {React.cloneElement(children, {
          cars: cardListFiltered,
          onChange: this.onChange,
        })}
      </div>
    );
  }
}

export default CardListFilter;
