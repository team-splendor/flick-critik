import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
            <Grid textAlign='center'>
              <Card fluid attached='bottom'>
                <Card.Header>Flick Critik</Card.Header>
              </Card>
            </Grid>
        </footer>
    );
  }
}
export default Footer;
