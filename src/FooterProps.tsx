import { Segment } from 'semantic-ui-react';
import * as React from 'react';

interface FooterProps {
  date: string;
}
export const Footer: React.SFC<FooterProps> = (props) => <Segment vertical>
  <p className="footer-text">
    Taken from the European Central Bank rates published on {props.date}
  </p>
</Segment>;