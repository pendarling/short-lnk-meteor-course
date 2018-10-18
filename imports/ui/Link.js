import React from 'react';

import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksList from './LinksList';
import LinksListToggle from './LinksListToggle';

export default () => {
  return (
    <div>
      <PrivateHeader title='Short Lnk'/>
      <div className='page-content'>
        <LinksListToggle/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
