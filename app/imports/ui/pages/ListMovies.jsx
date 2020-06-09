import React from 'react';
import { Image, Divider, Container, Header, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const movie1 = 'https://resizing.flixster.com/OIH1kkFNDkK1xrEyBk8IOBwJdQ4=/206x305/v1.bTsxMzE5NDc1OTtqOzE4NDY3OzEyMDA7OTYxOzE1MDA'
const movie2 = 'https://resizing.flixster.com/V1zUuXonYdVcVVHwXm8tCOHaL0E=/206x305/v1.bTsxMzQ0ODE1ODtqOzE4NDcwOzEyMDA7MjAyNTszMDAw'
const movie3 = 'https://resizing.flixster.com/OkaFJTHmUcCq-43epY8F6e_spfE=/206x305/v1.bTsxMzQxNTI5MjtqOzE4NDcwOzEyMDA7ODEwMDsxMjAwMA'
const movie4 = 'https://resizing.flixster.com/TVYw1JwqJOlkRfa2wxW8v2gkz5w=/206x305/v1.bTsxMzI1MzQ4MDtqOzE4NDY4OzEyMDA7MjAyNTszMDAw'

/** A simple static component to render some text for the landing page. */
class ListMovies extends React.Component {

  handleClick() {
    browserHistory.push("/add");
  }

  render() {
    return (

        <div align="left">
          <Header as="h2" textAlign="center">View Movies</Header>

          <Container>

            <Image src={movie1} size='medium' verticalAlign='top' />

            <span>Uncut Gems</span>

            <Button onClick={this.handleClick}>Review</Button>


          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie2} size='medium' verticalAlign='top' />

            <span>The Grey Fox</span>

            <Button onClick={this.handleClick}>Review</Button>

          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie3} size='medium' verticalAlign='top' />

            <span>The Vast of Night</span>

            <Button onClick={this.handleClick}>Review</Button>

          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie4} size='medium' verticalAlign='top' />

            <span>Judy Punch</span>

            <Button onClick={this.handleClick}>Review</Button>

          </Container>
        </div>
    );
  }
}

export default ListMovies;
