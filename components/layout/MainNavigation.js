import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Home.com</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add A Listing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
