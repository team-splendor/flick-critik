import React from 'react';
import { Grid, Card} from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '10px' };
    return (
        <footer>
          <div className='footer'>
            <Grid verticalAlign='middle' textAlign='center'>
              <Grid.Column>
                <div style={divStyle}>
                  <Card fluid attached='bottom'>
                    <Card.Header>Flick Critik</Card.Header>
                    <Card.Description><a href="https://healthy-manoa.github.io/">Home Page</a></Card.Description>
                  </Card>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </footer>
    );
  }
}
export default Footer;
