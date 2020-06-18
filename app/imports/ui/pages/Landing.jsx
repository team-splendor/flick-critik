import React from 'react';
import { Grid, Modal, Image, Button, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const padding = { paddingTop: '20px', paddingBottom: '20px' };
    return (
        <div className='background'>
          <Grid style={padding} container rows='4'>
            <Grid.Row>
              <Image size='large' centered src='/images/logo.PNG' />
            </Grid.Row>
            <Grid.Row centered>
              <Modal trigger={
                <Button color='red' animated='fade' size='mini'>
                  <Button.Content visible>
                    <Icon name='id card' inverted size='big'/>
                    What is Flick Critik?
                  </Button.Content>
                  <Button.Content hidden >Click to learn about Flick Critik</Button.Content>
                  </Button>}>
                <Modal.Header>Flick Critik is an app that you can use to critique films!</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Header as='h3'>Become a film critic yourself by rating and reviewing films!</Header>
                      <Image wrapped size='huge' src='/images/add.PNG' />
                      {/* eslint-disable-next-line max-len */}
                      <Header as='h3'>Wanna know what others think about a film? You can view other ratings and reviews!</Header>
                      <Image wrapped size='huge' src='/images/review.PNG' />
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Row>
            <Grid.Row centered>
              <Modal trigger={
                <Button color='blue' animated='fade' size='mini'>
                  <Button.Content visible>
                    <Icon name='pencil' color='orange' size='big'/>
                    Create film reviews and rate films
                  </Button.Content>
                  <Button.Content hidden>Click for instructions</Button.Content>
                </Button>}>
                <Modal.Header>Instructions for creating reviews and rating films</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header as='h3'>1) Create an account</Header>
                    <Header as='h4'>Click login</Header>
                    <Image wrapped size='huge' src='/images/login.PNG' />
                    <Header as='h4'>Click sign up</Header>
                    <Image wrapped size='huge' src='/images/signupclick.PNG' />
                    <Header as='h4'>Sign Up Page</Header>
                    <Image wrapped size='huge' src='/images/signup.PNG' />
                    <Header as='h3'>2) Click View Movies to browse movies</Header>
                    <Image wrapped size='huge' src='/images/viewclick.PNG' />
                    <Header as='h3'>3) Click Add Review to create a review for a movie</Header>
                    <Image wrapped size='huge' src='/images/view.PNG' />
                    <Header as='h4'>Select a film</Header>
                    <Image wrapped size='huge' src='/images/select.PNG' />
                    <Header as='h4'>Rate!</Header>
                    <Image wrapped size='huge' src='/images/rate.PNG' />
                    <Header as='h4'>Review!</Header>
                    <Image wrapped size='huge' src='/images/comment.PNG' />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Row>
            <Grid.Row centered>
              <Modal trigger={
                <Button color='purple' animated='fade' size='mini'>
                  <Button.Content visible>
                    <Icon name='star' color='yellow' size='big'/>
                    Check reviews and ratings for films
                  </Button.Content>
                  <Button.Content hidden >Click for instructions</Button.Content>
                </Button>}>
                <Modal.Header>Instructions to check reviews and ratings for films</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header as='h3'>1) Create an account</Header>
                    <Header as='h4'>Click login</Header>
                    <Image wrapped size='huge' src='/images/login.PNG'/>
                    <Header as='h4'>Click sign up</Header>
                    <Image wrapped size='huge' src='/images/signupclick.PNG' />
                    <Header as='h4'>Sign Up Page</Header>
                    <Image wrapped size='huge' src='/images/signup.PNG' />
                    <Header as='h3'>2) Click View Movies to browse movies</Header>
                    <Image wrapped size='huge' src='/images/viewclick.PNG' />
                    <Header as='h3'>3) Click Check Reviews to look at ratings and reviews for movies</Header>
                    <Image wrapped size='huge' src='/images/view2.PNG' />
                    <Header as='h4'>View reviews and ratings for movies</Header>
                    <Image wrapped size='huge' src='/images/review.PNG' />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default Landing;
