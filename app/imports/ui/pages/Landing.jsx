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
                <Button color='purple' animated='fade' size='mini'>
                  <Button.Content visible>
                    <Icon name='id card' inverted size='big'/>
                    What is Flick-Critik?
                  </Button.Content>
                  <Button.Content hidden >Click to learn about Flick-Critik</Button.Content>
                  </Button>}>
                  <Modal.Header textAlign='center'>Header</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='' />
                    <Modal.Description>
                      <Header>Description</Header>
                      <p>Paragraph</p>
                      <p>Paragraph</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Row>
              <Grid.Row centered>
                <Modal trigger={
                  <Button color='red' animated='fade' size='mini'>
                    <Button.Content visible>
                      <Icon name='write' color='yellow' size='big'/>
                      Create and Read Review For Films
                    </Button.Content>
                    <Button.Content hidden >Click to start now</Button.Content>
                    </Button>}>
                    <Modal.Header textAlign='center'>Header</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped size='medium' src='' />
                        <Modal.Description>
                          <Header>Description</Header>
                            <p>Paragraph</p>
                            <p>Paragraph</p>
                        </Modal.Description>
                      </Modal.Content>
                </Modal>
              </Grid.Row>
              <Grid.Row centered>
                <Modal trigger={
                  <Button color='blue' animated='fade' size='mini'>
                    <Button.Content visible>
                      <Icon name='star' color='yellow' size='big'/>
                      Create and look at ratings for films
                    </Button.Content>
                    <Button.Content hidden>Click to start now</Button.Content>
                    </Button>}>
                    <Modal.Header>Header</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped size='medium' src='' />
                        <Modal.Description>
                          <Header>Description</Header>
                            <p>Paragraph</p>
                            <p>Paragraph</p>
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
