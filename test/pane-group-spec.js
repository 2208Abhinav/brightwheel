/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import PaneGroup from '../src/pane-group';
import Pane from '../src/pane';

describe('PaneGroup', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myPaneGroup = new PaneGroup({}, []);
      expect(myPaneGroup.element.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myPaneGroup = new PaneGroup({}, []);
      expect(myPaneGroup.element.className).to.include('pane-group');
    });

    it('should include extra classes', () => {
      let myPaneGroup = new PaneGroup({ classNames:['extra-class', 'another-class'] }, []);
      expect(myPaneGroup.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myPane = new Pane({ text: 'My Pane' }, [])
      let myPaneGroup = new PaneGroup({}, [myPane]);
    expect(myPaneGroup.children[0].element.tagName).to.equal('DIV');
    expect(myPaneGroup.children[0].element.className).to.include('pane')
    });

  });

});
