import React from 'react';
import { Image, Divider, Container, Header, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

// eslint-disable-next-line max-len
const movie1 = 'https://resizing.flixster.com/OIH1kkFNDkK1xrEyBk8IOBwJdQ4=/206x305/v1.bTsxMzE5NDc1OTtqOzE4NDY3OzEyMDA7OTYxOzE1MDA';
// eslint-disable-next-line max-len
const movie2 = 'https://resizing.flixster.com/V1zUuXonYdVcVVHwXm8tCOHaL0E=/206x305/v1.bTsxMzQ0ODE1ODtqOzE4NDcwOzEyMDA7MjAyNTszMDAw';
// eslint-disable-next-line max-len
const movie3 = 'https://resizing.flixster.com/OkaFJTHmUcCq-43epY8F6e_spfE=/206x305/v1.bTsxMzQxNTI5MjtqOzE4NDcwOzEyMDA7ODEwMDsxMjAwMA';
// eslint-disable-next-line max-len
const movie4 = 'https://resizing.flixster.com/TVYw1JwqJOlkRfa2wxW8v2gkz5w=/206x305/v1.bTsxMzI1MzQ4MDtqOzE4NDY4OzEyMDA7MjAyNTszMDAw';

/** A simple static component to render some text for the landing page. */
class ListMovies extends React.Component {

  render() {
    return (

        <div align="left">
          <Header as="h2" textAlign="center">View Movies</Header>

          <Container>

            <Image src={movie1} size='medium' verticalAlign='top' />

            <span>Uncut Gems</span>

            <Link to={'/movie1'}>
              <Button>Check Reviews</Button></Link>

            <Link to={'/rating'}>
              <Button>Review</Button></Link>


          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie2} size='medium' verticalAlign='top' />

            <span>The Grey Fox</span>

            <Link to={'/movie2'}>
              <Button>Check Reviews</Button></Link>

            <Link to={'/rating'}>
              <Button>Review</Button></Link>

          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie3} size='medium' verticalAlign='top' />

            <span>The Vast of Night</span>

            <Link to={'/movie3'}>
              <Button>Check Reviews</Button></Link>

            <Link to={'/rating'}>
              <Button>Review</Button></Link>

          </Container>

          <Divider hidden />

          <Container>

            <Image src={movie4} size='medium' verticalAlign='top' />

            <span>Judy Punch</span>

            <Link to={'/movie4'}>
              <Button>Check Reviews</Button></Link>

            <Link to={'/rating'}>
              <Button>Review</Button></Link>

          </Container>
        </div>
    );
  }
}

export default ListMovies;
